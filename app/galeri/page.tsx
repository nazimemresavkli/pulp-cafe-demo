"use client";

import { useState } from "react";
import Link from "next/link";

const FILTERS = [
  { id: "all", label: "Tümü" },
  { id: "magaza", label: "Mağaza" },
  { id: "demleme", label: "Demleme" },
  { id: "cekirdek", label: "Çekirdek" },
  { id: "sunum", label: "Sunum" },
];

type Item = {
  id: number;
  cat: string;
  ratio: string;
  glyph: string;
  title: string;
  sub: string;
};

const ITEMS: Item[] = [
  { id: 1, cat: "magaza", ratio: "3 / 4", glyph: "interior", title: "Atölye", sub: "Mavi ışık" },
  { id: 2, cat: "demleme", ratio: "1 / 1", glyph: "v60", title: "V60", sub: "Pour-over" },
  { id: 3, cat: "sunum", ratio: "4 / 5", glyph: "flatwhite", title: "Flat White", sub: "Mikro köpük" },
  { id: 4, cat: "cekirdek", ratio: "3 / 4", glyph: "beans", title: "Yirgacheffe", sub: "Etiyopya" },
  { id: 5, cat: "demleme", ratio: "4 / 3", glyph: "espresso", title: "Espresso", sub: "30 ml shot" },
  { id: 6, cat: "magaza", ratio: "3 / 4", glyph: "bar", title: "Bar", sub: "Açılış" },
  { id: 7, cat: "sunum", ratio: "1 / 1", glyph: "plate", title: "Cheesecake", sub: "Ev yapımı" },
  { id: 8, cat: "demleme", ratio: "4 / 5", glyph: "cold", title: "Cold Brew", sub: "16 saat" },
  { id: 9, cat: "cekirdek", ratio: "3 / 4", glyph: "beans", title: "Huila", sub: "Kolombiya" },
  { id: 10, cat: "sunum", ratio: "1 / 1", glyph: "cortado", title: "Cortado", sub: "60 ml süt" },
  { id: 11, cat: "magaza", ratio: "4 / 5", glyph: "interior", title: "Salon", sub: "Gece" },
  { id: 12, cat: "demleme", ratio: "3 / 4", glyph: "aeropress", title: "Aeropress", sub: "Hassas" },
];

export default function GaleriPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "all" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <>
      {/* HERO */}
      <section className="bg-radial-glow relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="container-lux relative"
          style={{ paddingTop: 96, paddingBottom: 64 }}
        >
          <div className="section-num mb-12 fu">
            <span>Galeri</span>
          </div>
          <h1
            className="serif text-balance fu1"
            style={{
              fontSize: "clamp(40px, 9vw, 144px)",
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              maxWidth: "14ch",
            }}
          >
            Atölyenin{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              günlüğü
            </span>
            .
          </h1>
          <p
            className="fu2"
            style={{
              fontSize: "clamp(14px, 1.5vw, 17px)",
              lineHeight: 1.7,
              color: "var(--ink-2)",
              maxWidth: "48ch",
              marginTop: 32,
            }}
          >
            Mağaza, çekirdekler, demleme anları ve sunumlar. Kameranın az
            önce yakaladıkları.
          </p>
        </div>
      </section>

      {/* FİLTRE */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="container-lux flex items-center gap-3 overflow-x-auto no-scrollbar"
          style={{ padding: "16px 16px" }}
        >
          <span
            className="eyebrow whitespace-nowrap"
            style={{ marginRight: 4 }}
          >
            Filtre
          </span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`tag-pill ${active === f.id ? "active" : ""}`}
              style={{ whiteSpace: "nowrap" }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY */}
      <section
        className="bg-deep"
        style={{ paddingTop: 56, paddingBottom: 56 }}
      >
        <div className="container-lux">
          <div className="masonry">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="img-zoom group cursor-pointer relative"
                style={{
                  aspectRatio: item.ratio,
                  background:
                    "linear-gradient(135deg, var(--bg-3), var(--bg-2))",
                  border: "1px solid var(--line)",
                  animation: `fade-up 0.6s cubic-bezier(0.215,0.61,0.355,1) ${(i % 9) * 0.06}s both`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(77, 139, 245, 0.18), transparent 60%)",
                  }}
                >
                  <Glyph type={item.glyph} />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    padding: 16,
                    background:
                      "linear-gradient(to top, rgba(10,16,32,0.92), transparent)",
                  }}
                >
                  <div
                    className="eyebrow eyebrow-electric"
                    style={{ marginBottom: 4, fontSize: 9 }}
                  >
                    {item.sub}
                  </div>
                  <div
                    className="serif"
                    style={{
                      fontSize: 18,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.1,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center fade-in"
          style={{
            background: "rgba(10, 16, 32, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: 16,
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute eyebrow text-ink"
            style={{ top: 20, right: 20, fontSize: 12 }}
            aria-label="Kapat"
          >
            Kapat ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              aspectRatio: lightbox.ratio,
              maxWidth: 800,
              width: "100%",
              maxHeight: "85vh",
              background: "linear-gradient(135deg, var(--bg-3), var(--bg-2))",
              border: "1px solid var(--line-2)",
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
              <div style={{ transform: "scale(1.6)" }}>
                <Glyph type={lightbox.glyph} />
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                padding: 24,
                background:
                  "linear-gradient(to top, rgba(10,16,32,0.92), transparent)",
              }}
            >
              <div className="eyebrow eyebrow-electric mb-2">{lightbox.sub}</div>
              <div
                className="serif"
                style={{ fontSize: 24, letterSpacing: "-0.02em" }}
              >
                {lightbox.title}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="container-lux relative">
          <h2
            className="serif text-balance"
            style={{
              fontSize: "clamp(32px, 6vw, 88px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "18ch",
            }}
          >
            Bir sonraki kareyi{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              yerinde
            </span>{" "}
            yakalayın.
          </h2>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link href="/iletisim" className="btn-electric">
              Yol Tarifi
            </Link>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Glyph({ type }: { type: string }) {
  const stroke = "var(--cyan)";
  const sw = 1.4;
  const size = "clamp(48px, 10vw, 80px)";

  const wrap = (path: React.ReactNode) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={{ opacity: 0.85 }}
    >
      {path}
    </svg>
  );

  if (type === "interior")
    return wrap(
      <>
        <path d="M4 32V14L20 6l16 8v18" stroke={stroke} strokeWidth={sw} />
        <path d="M14 32V20h12v12" stroke={stroke} strokeWidth={sw} />
        <path d="M4 32h32" stroke={stroke} strokeWidth={sw} />
      </>
    );
  if (type === "bar")
    return wrap(
      <>
        <path d="M4 30h32M6 30V20h28v10M10 20v-6h20v6" stroke={stroke} strokeWidth={sw} />
        <circle cx="20" cy="12" r="2" fill={stroke} />
      </>
    );
  if (type === "beans")
    return wrap(
      <>
        <ellipse cx="14" cy="18" rx="6" ry="9" stroke={stroke} strokeWidth={sw} transform="rotate(-15 14 18)" />
        <path d="M14 11v14" stroke={stroke} strokeWidth={sw} transform="rotate(-15 14 18)" />
        <ellipse cx="26" cy="24" rx="6" ry="9" stroke={stroke} strokeWidth={sw} transform="rotate(15 26 24)" />
        <path d="M26 17v14" stroke={stroke} strokeWidth={sw} transform="rotate(15 26 24)" />
      </>
    );
  if (type === "espresso")
    return wrap(
      <>
        <path d="M8 14h22v8c0 6-5 11-11 11s-11-5-11-11v-8z" stroke={stroke} strokeWidth={sw} />
        <path d="M30 18h4a3 3 0 0 1 0 6h-4" stroke={stroke} strokeWidth={sw} />
      </>
    );
  if (type === "v60")
    return wrap(
      <>
        <path d="M8 8h24l-10 18h-4L8 8z" stroke={stroke} strokeWidth={sw} />
        <path d="M18 26v6M22 26v6" stroke={stroke} strokeWidth={sw} />
      </>
    );
  if (type === "aeropress")
    return wrap(
      <>
        <rect x="13" y="6" width="14" height="22" rx="1" stroke={stroke} strokeWidth={sw} />
        <path d="M16 28v4h8v-4" stroke={stroke} strokeWidth={sw} />
      </>
    );
  if (type === "cold")
    return wrap(
      <>
        <path d="M14 6h12v22c0 3-2 5-6 5s-6-2-6-5V6z" stroke={stroke} strokeWidth={sw} />
        <circle cx="20" cy="22" r="1.5" fill={stroke} />
        <circle cx="17" cy="17" r="1" fill={stroke} />
      </>
    );
  if (type === "flatwhite")
    return wrap(
      <>
        <path d="M8 14h22v10c0 4-4 8-11 8s-11-4-11-8V14z" stroke={stroke} strokeWidth={sw} />
        <path d="M14 20c2 1 4 1 6 0s4-1 6 0" stroke={stroke} strokeWidth={sw} />
      </>
    );
  if (type === "cortado")
    return wrap(
      <>
        <path d="M10 16h18v10c0 3-3 6-9 6s-9-3-9-6V16z" stroke={stroke} strokeWidth={sw} />
        <path d="M14 22h10" stroke={stroke} strokeWidth={sw} opacity="0.4" />
      </>
    );
  if (type === "plate")
    return wrap(
      <>
        <ellipse cx="20" cy="24" rx="14" ry="3" stroke={stroke} strokeWidth={sw} />
        <ellipse cx="20" cy="22" rx="10" ry="2" stroke={stroke} strokeWidth={sw} />
      </>
    );
  return null;
}
