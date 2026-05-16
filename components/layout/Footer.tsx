"use client";

import Link from "next/link";

const STORE_LINKS = [
  { href: "/menu", label: "Menü" },
  { href: "/menu?cat=espresso", label: "Espresso" },
  { href: "/menu?cat=filtre", label: "Filtre" },
  { href: "/menu?cat=soguk", label: "Soğuk Kahve" },
];

const BRAND_LINKS = [
  { href: "/hakkimizda", label: "Hikayemiz" },
  { href: "/blog", label: "Günlük" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
];

const REACH_LINKS = [
  { href: "https://wa.me/905380684828", label: "WhatsApp", external: true },
  { href: "https://instagram.com/", label: "Instagram", external: true },
  { href: "tel:05380684828", label: "0538 068 48 28", external: true },
  {
    href: "https://maps.google.com/?q=Kemalpaşa+Dağköy+Sk+No+8+Serdivan+Sakarya",
    label: "Yol Tarifi",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-2)",
        color: "var(--ink)",
        borderTop: "1px solid var(--line)",
      }}
      className="relative overflow-hidden"
    >
      {/* Üst radyal glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(77, 139, 245, 0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* BÜYÜK MARKA BEYANI */}
      <div
        className="container-lux relative"
        style={{ paddingTop: 140, paddingBottom: 100 }}
      >
        <div
          className="eyebrow"
          style={{ marginBottom: 32, color: "var(--electric)" }}
        >
          Pulp Coffee Lab — Serdivan, 2026
        </div>
        <h2
          className="serif text-balance"
          style={{
            fontSize: "clamp(44px, 7.5vw, 108px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            maxWidth: "18ch",
          }}
        >
          Feel the{" "}
          <span
            className="serif-italic glow-text"
            style={{ color: "var(--cyan)" }}
          >
            timeless
          </span>{" "}
          flow.
        </h2>
        <p
          style={{
            marginTop: 32,
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--ink-2)",
            maxWidth: "44ch",
          }}
        >
          Sakarya Serdivan'da küçük bir specialty kahve atölyesi. Sabahın
          erken saatlerinden gece bire kadar, her fincan bir ritüel.
        </p>
      </div>

      <div className="hairline-electric container-lux" style={{ opacity: 0.4 }} />

      {/* 4 SÜTUN */}
      <div
        className="container-lux relative"
        style={{ paddingTop: 80, paddingBottom: 72 }}
      >
        <div className="grid-12">
          {/* SÜTUN 1 — MARKA */}
          <div style={{ gridColumn: "span 3 / span 3" }} className="hidden md:block">
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: 46,
                  height: 46,
                  background: "var(--navy)",
                  borderRadius: 3,
                  boxShadow:
                    "0 0 0 1px rgba(111, 177, 255, 0.18), 0 0 20px -4px rgba(77, 139, 245, 0.35)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4V20M7 4H13.5C16.5376 4 19 6.46243 19 9.5V9.5C19 12.5376 16.5376 15 13.5 15H7"
                    stroke="#F0F4FA"
                    strokeWidth="1.8"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="serif" style={{ fontSize: 20, color: "var(--ink)" }}>
                  Pulp
                </span>
                <span
                  className="eyebrow"
                  style={{ fontSize: 9, marginTop: 4, color: "var(--electric)" }}
                >
                  Coffee Lab
                </span>
              </div>
            </Link>
            <p
              style={{
                marginTop: 28,
                fontSize: 13,
                lineHeight: 1.7,
                color: "var(--ink-3)",
                maxWidth: "26ch",
              }}
            >
              Tek köken çekirdekler, hassas demleme, sakin atmosfer. Gece bire
              kadar açık.
            </p>
          </div>

          {/* SÜTUN 2 — MAĞAZA */}
          <div style={{ gridColumn: "span 3 / span 3" }} className="hidden md:block">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Mağaza
            </div>
            <ul className="flex flex-col gap-3">
              {STORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="sans transition-colors hover:text-ink"
                    style={{ fontSize: 14, color: "var(--ink-2)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SÜTUN 3 — KURUMSAL */}
          <div style={{ gridColumn: "span 3 / span 3" }} className="hidden md:block">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Kurumsal
            </div>
            <ul className="flex flex-col gap-3">
              {BRAND_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="sans transition-colors hover:text-ink"
                    style={{ fontSize: 14, color: "var(--ink-2)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SÜTUN 4 — ULAŞIN */}
          <div style={{ gridColumn: "span 3 / span 3" }} className="hidden md:block">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Ulaşın
            </div>
            <ul className="flex flex-col gap-3">
              {REACH_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="sans transition-colors hover:text-ink"
                    style={{ fontSize: 14, color: "var(--ink-2)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: 32,
                paddingTop: 24,
                borderTop: "1px solid var(--line)",
              }}
            >
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                Adres
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-3)" }}>
                Kemalpaşa, Dağköy Sk. No:8/B
                <br />
                54050 Serdivan / Sakarya
              </p>
            </div>
          </div>

          {/* MOBİL */}
          <div className="md:hidden" style={{ gridColumn: "span 12 / span 12" }}>
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: 46, height: 46, background: "var(--navy)", borderRadius: 3,
                  boxShadow: "0 0 0 1px rgba(111, 177, 255, 0.18)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4V20M7 4H13.5C16.5376 4 19 6.46243 19 9.5V9.5C19 12.5376 16.5376 15 13.5 15H7"
                    stroke="#F0F4FA" strokeWidth="1.8" strokeLinecap="square"
                  />
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="serif" style={{ fontSize: 20, color: "var(--ink)" }}>Pulp</span>
                <span className="eyebrow" style={{ fontSize: 9, marginTop: 4, color: "var(--electric)" }}>
                  Coffee Lab
                </span>
              </div>
            </Link>
            <div className="flex flex-col gap-8">
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Mağaza</div>
                <ul className="flex flex-col gap-2.5">
                  {STORE_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} style={{ fontSize: 14, color: "var(--ink-2)" }}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Kurumsal</div>
                <ul className="flex flex-col gap-2.5">
                  {BRAND_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} style={{ fontSize: 14, color: "var(--ink-2)" }}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Adres</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--ink-3)" }}>
                  Kemalpaşa, Dağköy Sk. No:8/B<br />54050 Serdivan / Sakarya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALT ŞERİT */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div
          className="container-lux flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ paddingTop: 28, paddingBottom: 28, gap: 16 }}
        >
          <div className="eyebrow" style={{ color: "var(--ink-3)" }}>
            © 2026 Pulp Coffee Lab — Tüm hakları saklıdır
          </div>
          <div
            className="flex items-center gap-8 eyebrow"
            style={{ color: "var(--ink-3)" }}
          >
            <Link href="/iletisim" className="hover:text-ink transition-colors">Gizlilik</Link>
            <Link href="/iletisim" className="hover:text-ink transition-colors">KVKK</Link>
            <span>Sakarya · Türkiye</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
