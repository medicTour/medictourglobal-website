import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import styles from './resourcePage.module.scss';

export async function generateStaticParams() {
  // Load default locale to generate all possible slugs
  const messages = (await import(`@/messages/en.json`)).default;
  const resources = messages.Resources?.items as Array<{ slug: string }>;
  return resources.map((item) => ({ slug: item.slug }));
}

export default async function ResourcePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  const resources = messages.Resources?.items as Array<{ title: string; description: string; button: string; slug: string }>;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();

  return (
    <section className={styles.resourcePage}>
      <div className="container">
        <h1 className={styles.title}>{resource.title}</h1>
        <p className={styles.description}>{resource.description}</p>
        <div className={styles.cta}>
          <Link href="/contact" className={styles.button}>
            Discuss Your Treatment
          </Link>
        </div>
      </div>
    </section>
  );
}