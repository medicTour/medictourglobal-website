import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

export async function POST(req: Request) {
  try {
    const data = await req.json();
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
    } = data;

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
      `,
    });

    // Send auto-reply to patient
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "We Received Your Medical Inquiry – MedicTour Global",
      html: `
        <p>Dear ${fullName},</p>
        <p>Thank you for contacting MedicTour Global.</p>
        <p>Our care team has received your inquiry and will review your medical information. If additional reports are required, we will contact you shortly.</p>
        <p>We usually respond within 24 hours.</p>
        <br/>
        <p>Best regards,<br/>MedicTour Global<br/>Patient Coordination Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}