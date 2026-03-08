import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["en", "ar", "fr"].includes(locale)) {
    notFound();
  }

  let messages;

  if (locale === 'ar') {
    messages = (await import('../../messages/ar.json')).default;
  } else if (locale === 'fr') {
    messages = (await import('../../messages/fr.json')).default;
  } else {
    messages = (await import('../../messages/en.json')).default;
  }


  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
