import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guides, languages, parkManagement, siteUrl } from "@/i18n/guides";

import { photos, placePins, ratings, visitDetails, visitLabels } from "@/i18n/guide-visits";

import { nearbyLabels } from "@/i18n/nearby-guides";

type Locale = (typeof languages)[number];
type Props = { params: Promise<{ lang: string; slug: string }> };

async function resolveGuide({ params }: Props) {
  const { lang, slug } = await params;
  const locale = languages.find((value) => value === lang);
  const guide = guides.find((entry) => entry.slug === slug);
  if (!locale || !guide) notFound();
  return { locale, guide, copy: guide.copy[locale] };
}

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, guide, copy } = await resolveGuide(props);
  const path = `/explore/${guide.slug}`;
  const canonical = `${siteUrl}/${locale}${path}`;
  return {
    title: copy.title,
    description: copy.intro,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(languages.map((lang) => [lang, `${siteUrl}/${lang}${path}`])),
        "x-default": `${siteUrl}/en${path}`,
      },
    },
    openGraph: { title: copy.title, description: copy.intro, url: canonical, type: "article" },
    twitter: { card: "summary", title: copy.title, description: copy.intro },
  };
}

function languageName(locale: Locale) {
  return { es: "Español", en: "English", zh: "中文" }[locale];
}

export default async function GuidePage(props: Props) {
  const { locale, guide, copy } = await resolveGuide(props);
  const labels = guideLabels[locale];
  const details = visitLabels[locale];
  const extra = nearbyLabels[locale];
  const [transport, hours] = visitDetails[guide.slug]?.[locale] ?? [copy.access, extra.hours];
  const localCopy = "heritage" in copy ? copy : undefined;
  const management = guide.slug === "cueva-del-indio" ? extra.cave : parkManagement[locale];
  const reviewMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(guide.mapQuery)}`;
  const pin = placePins[guide.slug];
  const map = pin ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pin)}` : reviewMap;
  const rating = ratings[guide.slug];
  const photo = photos[guide.slug];

  return (
    <main className="section attraction-guide">
      <nav className="guide-links" aria-label={labels.home}>
        <Link href={`/${locale}`}>{labels.home}</Link>
        {languages.filter((lang) => lang !== locale).map((lang) => (
          <Link key={lang} href={`/${lang}/explore/${guide.slug}`} hrefLang={lang} lang={lang}>
            {languageName(lang)}
          </Link>
        ))}
      </nav>
      <header>
        <h1 className="section-title">{copy.title}</h1>
        <p className="about-text">{copy.intro}</p>
        <a className="google-maps-btn" href={map} target="_blank" rel="noreferrer">{labels.map}</a>
        {rating && <p><a href="#reviews">{rating.score.toLocaleString(locale)} / 5 · {rating.count} {details.count}</a></p>}
      </header>
      <section>
        <h2>{labels.about}</h2>
        <p>{management}</p>
      </section>
      {photo && (
        <figure className="guide-photo">
          <Image src={`/explore/${guide.slug}.webp`} width={photo.width} height={photo.height} alt={copy.title} unoptimized />
          <figcaption>
            <a href={photo.source}>
              {photo.credit} / Wikimedia Commons
            </a>
          </figcaption>
        </figure>
      )}
      <section>
        <h2>{labels.facts}</h2>
        <dl>
          <dt>{labels.place}</dt><dd>{copy.location}</dd>
          <dt>{labels.access}</dt><dd>{copy.access}</dd>
          <dt>{details.hours}</dt><dd>{hours}</dd>
        </dl>
      </section>
      <section>
        <h2>{details.travel}</h2>
        <p>{transport}</p>
        <a href={map}>{labels.map}</a>
      </section>
      <section>
        <h2>{labels.advice}</h2>
        <p>{copy.advice}</p>
      </section>
      {localCopy && (
        <section>
          <h2>{extra.heritage}</h2>
          <p>{localCopy.heritage}</p>
          <h3>{extra.observation}</h3>
          <p>{localCopy.observation}</p>
        </section>
      )}
      <section>
        <h2>{labels.route}</h2>
        <ol>{copy.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      {localCopy && <section><h2>{extra.photo}</h2><p>{localCopy.camera}</p></section>}
      <section>
        <h2>{labels.faq}</h2>
        <h3>{copy.question}</h3>
        <p>{copy.answer}</p>
      </section>
      <section id="reviews">
        <h2>{details.reviews}</h2>
        {rating ? (
          <p>
            <strong>{rating.score.toLocaleString(locale)} / 5 · {rating.count} {details.count}</strong>
            {" · "}<a href={rating.source}>Google Travel</a>
            {" · "}{details.checked}
          </p>
        ) : <p>{details.lookup}</p>}
        <a href={reviewMap}>{details.viewReviews}</a>
      </section>
      <section>
        <h2>{labels.related}</h2>
        <ul>{guides.filter(({ slug }) => slug !== guide.slug).map(({ slug, copy }) => (
          <li key={slug}><Link href={`/${locale}/explore/${slug}`}>{copy[locale].title}</Link></li>
        ))}</ul>
      </section>
      <section>
        <h2>{labels.sources}</h2>
        <ul>{guide.sources.map(([name, url]) => <li key={url}><a href={url}>{name}</a></li>)}</ul>
      </section>
    </main>
  );
}
