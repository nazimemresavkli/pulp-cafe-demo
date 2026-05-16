"use client";

import Link from "next/link";
import { useState } from "react";

const CATS = [
  { id: "all", label: "Tümü" },
  { id: "demleme", label: "Demleme" },
  { id: "cekirdek", label: "Çekirdek" },
  { id: "magaza", label: "Mağaza" },
  { id: "felsefe", label: "Felsefe" },
];

type Post = {
  id: number;
  cat: string;
  catLabel: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  glyph: string;
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    id: 1,
    cat: "felsefe",
    catLabel: "Felsefe",
    date: "12 / 05 / 26",
    read: "4 dk okuma",
    title: "Geceleri neden kahve içeriz?",
    excerpt:
      "Pulp'ta bire kadar açığız. Bu, sabaha kadar dans etmek için değil, geceyi sakince geçirmek için bir alan açmak.",
    glyph: "moon",
    featured: true,
  },
  {
    id: 2,
    cat: "demleme",
    catLabel: "Demleme",
    date: "07 / 05 / 26",
    read: "3 dk okuma",
    title: "V60'da debiyi nasıl okuruz?",
    excerpt:
      "Suyun akışını okumak, bir baristanın temel becerisidir. Üç dakikalık bir gözlem.",
    glyph: "v60",
  },
  {
    id: 3,
    cat: "cekirdek",
    catLabel: "Çekirdek",
    date: "01 / 05 / 26",
    read: "5 dk okuma",
    title: "Etiyopya Yirgacheffe — bir profil",
    excerpt:
      "Çiçeksi, narenciyeli, hafif gövde. Specialty kahvenin klasik referans noktası.",
    glyph: "beans",
  },
  {
    id: 4,
    cat: "magaza",
    catLabel: "Mağaza",
    date: "24 / 04 / 26",
    read: "2 dk okuma",
    title: "Bir bar nasıl tasarlanır?",
    excerpt:
      "Tezgah yüksekliği, ışık açısı, sessizlik. Pulp'ın açılışından önceki kararlar.",
    glyph: "bar",
  },
  {
    id: 5,
    cat: "demleme",
    catLabel: "Demleme",
    date: "18 / 04 / 26",
    read: "4 dk okuma",
    title: "Espresso'da TDS ölçmek",
    excerpt:
      "Yoğunluğu sayıyla okumak. Bir refraktometre neyi söyler, neyi söylemez.",
    glyph: "espresso",
  },
  {
    id: 6,
    cat: "felsefe",
    catLabel: "Felsefe",
    date: "10 / 04 / 26",
    read: "3 dk okuma",
    title: "Hızlı kahve, yavaş kahve",
    excerpt:
      "Specialty kahvenin yavaşlığı bir yavaşlık değil, başka bir hız.",
    glyph: "clock",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("all");
  const featured = POSTS.find((p) => p.featured);
  const list = POSTS.filter((p) => !p.featured);
  const filtered = active === "all" ? list : list.filter((p) => p.cat === active);

  return (
    <>
      {/* HERO */}
      <section className="bg-radial-glow relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="container-lux relative"
          style={{ paddingTop: 120, paddingBottom: 80 }}
        >
          <div className="section-num mb-16 fu">
            <span>Günlük</span>
          </div>
          <h1
            className="serif text-balance fu1"
            style={{
              fontSize: "clamp(48px, 9vw, 144px)",
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              maxWidth: "14ch",
            }}
          >
            Atölyeden{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              notlar
            </span>
            .
          </h1>
          <p
            className="fu2 mt-12"
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-2)",
              maxWidth: "52ch",
            }}
          >
            Demleme parametreleri, çekirdek profilleri, mağaza günlükleri ve
            specialty kahve üzerine kısa düşünceler.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section
          className="section"
          style={{
            background: "var(--bg-2)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div className="container-lux">
            <Link
              href="/blog"
              className="block frame group cursor-pointer fu"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <div className="grid-12">
                <div
                  className="img-zoom"
                  style={{
                    gridColumn: "span 6 / span 6",
                    aspectRatio: "4 / 3",
                    background: "linear-gradient(135deg, var(--bg-3), var(--bg))",
                    position: "relative",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(77, 139, 245, 0.22), transparent 60%)",
                    }}
                  >
                    <Glyph type={featured.glyph} size={120} />
                  </div>
                </div>
                <div
                  style={{
                    gridColumn: "span 6 / span 6",
                    padding: "56px 48px",
                  }}
                  className="flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3 mb-6 eyebrow">
                    <span style={{ color: "var(--electric)" }}>Öne Çıkan</span>
                    <span style={{ color: "var(--ink-3)" }}>·</span>
                    <span style={{ color: "var(--ink-3)" }}>{featured.catLabel}</span>
                    <span style={{ color: "var(--ink-3)" }}>·</span>
                    <span style={{ color: "var(--ink-3)" }}>{featured.read}</span>
                  </div>
                  <h2
                    className="serif text-balance"
                    style={{
                      fontSize: "clamp(28px, 4vw, 48px)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.025em",
                      marginBottom: 20,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "var(--ink-2)",
                      marginBottom: 32,
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <span className="link-reveal">Yazıyı oku</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* FİLTRE */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="container-lux flex items-center gap-3 overflow-x-auto"
          style={{ padding: "20px 40px" }}
        >
          <span className="eyebrow whitespace-nowrap" style={{ marginRight: 8 }}>
            Kategori
          </span>
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`tag-pill ${active === c.id ? "active" : ""}`}
              style={{ whiteSpace: "nowrap" }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* LİSTE */}
      <section className="section bg-deep">
        <div className="container-lux">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p, i) => (
              <Link
                key={p.id}
                href="/blog"
                className="group block"
                style={{
                  animation: `fade-up 0.6s cubic-bezier(0.215,0.61,0.355,1) ${i * 0.06}s both`,
                }}
              >
                <div
                  className="img-zoom mb-6 relative"
                  style={{
                    aspectRatio: "4 / 5",
                    background:
                      "linear-gradient(135deg, var(--bg-3), var(--bg))",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(77, 139, 245, 0.16), transparent 60%)",
                    }}
                  >
                    <Glyph type={p.glyph} size={80} />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3 eyebrow">
                  <span style={{ color: "var(--electric)" }}>{p.catLabel}</span>
                  <span style={{ color: "var(--ink-3)" }}>·</span>
                  <span style={{ color: "var(--ink-3)" }}>{p.date}</span>
                </div>
                <h3
                  className="serif mb-3"
                  style={{
                    fontSize: 22,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",
                  }}
                >
                  {p.excerpt}
                </p>
                <div className="mt-4 mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  {p.read}
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32">
              <p className="eyebrow" style={{ color: "var(--ink-3)" }}>
                Bu kategoride henüz yazı yok
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--bg-2)", padding: "120px 0" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(77, 139, 245, 0.15), transparent 60%)",
          }}
        />
        <div className="container-lux relative">
          <div className="grid-12 items-end">
            <div style={{ gridColumn: "span 7 / span 7" }}>
              <div className="section-num mb-8">
                <span>Bülten</span>
              </div>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(36px, 6vw, 88px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  maxWidth: "16ch",
                }}
              >
                Ayda bir{" "}
                <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
                  not
                </span>
                .
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  marginTop: 20,
                  maxWidth: "44ch",
                }}
              >
                Yeni çekirdekler, demleme notları, mağaza güncellemeleri.
                Spam yok, az ve seçilmiş.
              </p>
            </div>
            <div style={{ gridColumn: "span 5 / span 5" }}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                <div
                  style={{
                    borderBottom: "1px solid var(--line-2)",
                    paddingBottom: 12,
                  }}
                >
                  <input
                    type="email"
                    placeholder="e-posta adresiniz"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "var(--ink)",
                      fontSize: 18,
                      fontFamily: "var(--font-fraunces), serif",
                      letterSpacing: "-0.01em",
                    }}
                  />
                </div>
                <button type="submit" className="btn-electric self-start">
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Glyph({ type, size = 80 }: { type: string; size?: number }) {
  const stroke = "var(--cyan)";
  const sw = 1.4;

  if (type === "moon") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M28 6c-1 0-2 0-3 0a14 14 0 1 0 17 17c-7 0-14-7-14-17z" stroke={stroke} strokeWidth={sw} />
        <circle cx="14" cy="14" r="0.8" fill={stroke} />
        <circle cx="10" cy="22" r="0.8" fill={stroke} />
      </svg>
    );
  }
  if (type === "clock") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke={stroke} strokeWidth={sw} />
        <path d="M20 12v8l5 3" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (type === "v60") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 8h24l-10 18h-4L8 8z" stroke={stroke} strokeWidth={sw} />
        <path d="M18 26v6M22 26v6" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (type === "espresso") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 14h22v8c0 6-5 11-11 11s-11-5-11-11v-8z" stroke={stroke} strokeWidth={sw} />
        <path d="M30 18h4a3 3 0 0 1 0 6h-4" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (type === "beans") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <ellipse cx="14" cy="18" rx="6" ry="9" stroke={stroke} strokeWidth={sw} transform="rotate(-15 14 18)" />
        <path d="M14 11v14" stroke={stroke} strokeWidth={sw} transform="rotate(-15 14 18)" />
        <ellipse cx="26" cy="24" rx="6" ry="9" stroke={stroke} strokeWidth={sw} transform="rotate(15 26 24)" />
        <path d="M26 17v14" stroke={stroke} strokeWidth={sw} transform="rotate(15 26 24)" />
      </svg>
    );
  }
  if (type === "bar") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M4 30h32M6 30V20h28v10M10 20v-6h20v6" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  return null;
}
