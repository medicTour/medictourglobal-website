import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email templates by locale
const emailTemplates: Record<string, (name: string) => { subject: string; html: string }> = {
  en: (name: string) => ({
    subject: "We Received Your Medical Inquiry – MedicTour Global",
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for contacting MedicTour Global.</p>
      <p>Our care team has received your inquiry and will review your medical information. If additional reports are required, we will contact you shortly.</p>
      <p>We usually respond within 24 hours.</p>
      <br/>
      <p>Best regards,<br/>MedicTour Global<br/>Patient Coordination Team</p>
    `,
  }),
  ar: (name: string) => ({
    subject: "تم استلام استفسارك الطبي – MedicTour Global",
    html: `
      <p>عزيزي/عزيزتي ${name}،</p>
      <p>شكراً لتواصلك مع MedicTour Global.</p>
      <p>لقد تلقى فريق الرعاية لدينا استفسارك وسيقوم بمراجعة معلوماتك الطبية. إذا كانت هناك حاجة إلى تقارير إضافية، فسنتواصل معك قريباً.</p>
      <p>نرد عادةً خلال 24 ساعة.</p>
      <br/>
      <p>مع أطيب التحيات،<br/>MedicTour Global<br/>فريق تنسيق رعاية المرضى</p>
    `,
  }),
  fr: (name: string) => ({
    subject: "Nous avons reçu votre demande médicale – MedicTour Global",
    html: `
      <p>Cher/Chère ${name},</p>
      <p>Merci d'avoir contacté MedicTour Global.</p>
      <p>Notre équipe de soins a bien reçu votre demande et examinera vos informations médicales. Si des rapports supplémentaires sont nécessaires, nous vous contacterons prochainement.</p>
      <p>Nous répondons généralement sous 24 heures.</p>
      <br/>
      <p>Cordialement,<br/>MedicTour Global<br/>Équipe de coordination des patients</p>
    `,
  }),
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const fields: any = {};
    const files: File[] = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files.push(value);
      } else {
        fields[key] = value;
      }
    }

    const {
      fullName,
      email,
      phone,
      country,
      age,
      gender,
      treatment,
      condition,
      previousDiagnosis,
      previousTreatments,
      timeline,
      visitedBefore,
      companion,
      additionalMessage,
      locale = "en",
    } = fields;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare attachments
    const attachments = await Promise.all(
      files.map(async (file: File) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "New Medical Inquiry – MedicTour Global",
      html: `
        <h2>New Medical Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Treatment Needed:</strong> ${treatment}</p>
        <p><strong>Condition:</strong> ${condition}</p>
        <p><strong>Previous Diagnosis:</strong> ${previousDiagnosis || "N/A"}</p>
        <p><strong>Previous Treatments:</strong> ${previousTreatments || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Visited India before:</strong> ${visitedBefore}</p>
        <p><strong>Travel with companion:</strong> ${companion}</p>
        <p><strong>Additional Message:</strong> ${additionalMessage || "N/A"}</p>
        <p><strong>Attachments:</strong> ${files.length} file(s)</p>
      `,
      attachments,
    });

    // Send auto-reply to patient using the appropriate template
    const template = emailTemplates[locale as keyof typeof emailTemplates] || emailTemplates.en;
    const { subject, html } = template(fullName);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}