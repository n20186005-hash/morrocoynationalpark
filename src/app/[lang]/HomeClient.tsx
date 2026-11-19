"use client";

import React, { useEffect, useState, useRef } from "react";
import { LangProvider, useLang } from "@/components/LangProvider";
import Link from "next/link";
import { ui } from "@/i18n/ui";
import { nearbyLabels } from "@/i18n/nearby-guides";
import { guides } from "@/i18n/guides";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const MAPS_URL = "https://maps.app.goo.gl/f2iQdFCmohQUGbZLA";

const GALLERY_IMAGES = Array.from({ length: 18 }, (_: number, i: number) => `/gallery/parque-nacional-morrocoy (${i + 1}).jpg`);

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Nav() {
  const { t, locale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          {ui[locale].park}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href="#explore">{nearbyLabels[locale].nearby}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{t.nav.transportation}</a>
          <a href="#history">{t.nav.history}</a>
          <a href="#tips">{t.nav.tips}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#location">{t.nav.location}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function Hero() {
  const { t, locale } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-water" />
      <div className="hero-content">
        <p className="hero-tagline">{t.hero.tagline}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <a href="#visiting" className="hero-cta">
          {t.hero.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        <a href="#explore" className="hero-nearby">{nearbyLabels[locale].nearby}</a>
      </div>
      <div className="hero-meta">
        <div className="hero-rating">4.7</div>
        <div className="hero-stars">★★★★☆</div>
        <div className="hero-reviews">10,120 {t.rating.reviews} · {t.rating.source}</div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">01</p>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text">{t.about.p1}</p>
        <p className="about-text">{t.about.p2}</p>
      </ScrollReveal>
      <ScrollReveal>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem", marginTop: "2rem" }}>
          {t.about.highlights.title}
        </h3>
        <div className="highlights-grid">
          {t.about.highlights.items.map((item: string, i: number) => (
            <div className="highlight-item" key={i}>
              <div className="highlight-icon" />
              <span className="highlight-text">{item}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="management-info" style={{ marginTop: "2rem", padding: "1.5rem", background: "#fff", borderRadius: "2px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.5rem" }}>
            {t.about.management.title}
          </h4>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--color-earth-soft)" }}>
            {t.about.management.content}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ExploreGuides() {
  const { locale } = useLang();
  return (
    <section id="explore" className="section">
      <h2 className="section-title">{nearbyLabels[locale].nearby}</h2>
      <div className="section-divider" />
      <div className="transport-grid">
        {guides.map(({ slug, copy }) => (
          <article className="transport-card" key={slug}>
            <h3 className="transport-title">
              <Link href={`/${locale}/explore/${slug}`}>{copy[locale].title}</Link>
            </h3>
            <p className="transport-content">{copy[locale].intro}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Visiting() {
  const { t } = useLang();
  const cards = [
    { title: t.visiting.hours.title, content: t.visiting.hours.content, note: t.visiting.hours.note },
    { title: t.visiting.price.title, content: t.visiting.price.content, note: t.visiting.price.note },
    { title: t.visiting.duration.title, content: t.visiting.duration.content, note: t.visiting.duration.note },
  ];

  return (
    <section id="visiting" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #eee8dd 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">02</p>
          <h2 className="section-title">{t.visiting.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="info-grid">
            {cards.map((c, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-title">{c.title}</div>
                <div className="info-card-content">{c.content}</div>
                <div className="info-card-note">{c.note}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bring-section">
            <div className="bring-title">{t.visiting.bring.title}</div>
            <ul className="bring-list">
              {t.visiting.bring.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Location() {
  const { t, locale } = useLang();
  return (
    <section id="location" className="section">
      <ScrollReveal>
        <p className="section-label">07</p>
        <h2 className="section-title">{t.location.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="location-section">
          <div className="location-map-container">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.375689299918!2d-68.305807!3d10.849503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8f17b6b0e1b0a5%3A0x8c8c8c8c8c8c8c8c!2sParque%20Nacional%20Morrocoy!5e0!3m2!1s${locale === "zh" ? "zh-CN" : locale}!2sus!4v1700000000000!5m2!1s${locale === "zh" ? "zh-CN" : locale}!2sus`}
              width="800"
              height="600"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={ui[locale].map}
            />
          </div>
          <div className="location-info">
            <p className="location-address">{t.location.address}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
              {t.location.openMaps}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Transportation() {
  const { t } = useLang();
  const transportOptions = [
    { icon: "✈️", title: t.transportation.fromAirport.title, content: t.transportation.fromAirport.content },
    { icon: "🚗", title: t.transportation.selfDrive.title, content: t.transportation.selfDrive.content },
    { icon: "🚌", title: t.transportation.publicTransport.title, content: t.transportation.publicTransport.content },
    { icon: "🚤", title: t.transportation.otherWays.title, content: t.transportation.otherWays.content },
  ];

  return (
    <section id="transportation" className="section">
      <ScrollReveal>
        <p className="section-label">03</p>
        <h2 className="section-title">{t.transportation.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="transport-grid">
          {transportOptions.map((option, i) => (
            <div className="transport-card" key={i}>
              <div className="transport-icon">{option.icon}</div>
              <h3 className="transport-title">{option.title}</h3>
              <p className="transport-content">{option.content}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function History() {
  const { t } = useLang();
  return (
    <section id="history" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">04</p>
          <h2 className="section-title">{t.history.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="history-content">
            <p className="history-text">{t.history.p1}</p>
            <p className="history-text">{t.history.p2}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Tips() {
  const { t } = useLang();
  return (
    <section id="tips" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">05</p>
          <h2 className="section-title">{t.tips.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <ul className="tips-list">
            {t.tips.items.map((tip: string, i: number) => (
              <li className="tip-item" key={i}>
                <span className="tip-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="tip-text">{tip}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Gallery() {
  const { t, locale } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section">
      <ScrollReveal>
        <p className="section-label">06</p>
        <h2 className="section-title">{t.gallery.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
              <img src={src} alt={`${ui[locale].photo} ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.gallery.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" aria-label={ui[locale].close} onClick={() => setLightboxIndex(null)}>×</button>
          <button className="lightbox-prev" aria-label={ui[locale].prev} onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>‹</button>
          <img src={GALLERY_IMAGES[lightboxIndex]} alt={`${ui[locale].photo} ${lightboxIndex + 1}`} className="lightbox-img" />
          <button className="lightbox-next" aria-label={ui[locale].next} onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length); }}>›</button>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="section">
      <ScrollReveal>
        <p className="section-label">08</p>
        <h2 className="section-title">{t.reviews.title}</h2>
        <p className="section-subtitle">{t.reviews.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.reviews.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FAQ() {
  const { t } = useLang();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems = t.faq.items;

  return (
    <section id="faq" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">09</p>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">{t.faq.subtitle}</p>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div className="faq-item expanded" key={i}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <span>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-icon ${expandedIndex === i ? "rotated" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                  {item.points && <ol>{item.points.map((point) => <li key={point}>{point}</li>)}</ol>}
                  {item.closing && <p>{item.closing}</p>}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t, locale } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <a href={`/${locale}/privacy`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {ui[locale].privacy}
        </a>
        <a href={`/${locale}/terms`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {ui[locale].terms}
        </a>
        <a href={`/${locale}/cookies`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {ui[locale].cookies}
        </a>
      </div>
      <p className="footer-text" style={{ marginTop: "1rem" }}>{t.footer.text}</p>
      <p className="footer-made">{t.footer.made}</p>
    </footer>
  );
}

export default function HomeClient({ lang }: { lang: string }) {
  return (
    <LangProvider initialLocale={lang}>
      <Nav />
      <Hero />
      <About />
      <ExploreGuides />
      <Visiting />
      <Transportation />
      <History />
      <Tips />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
    </LangProvider>
  );
}
