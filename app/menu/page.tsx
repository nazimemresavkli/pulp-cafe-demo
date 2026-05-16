"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  name: string;
  origin: string;
  desc: string;
  price: string;
  glyph: string;
  cat: string;
};

const CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "espresso", label: "Espresso" },
  { id: "filtre", label: "Filtre" },
  { id: "sutlu", label: "Sütlü" },
  { id: "soguk", label: "Soğuk" },
  { id: "yiyecek", label: "Yiyecek" },
];

const MENU: MenuItem[] = [
  { name: "Espresso", origin: "Tek shot · 30ml", desc: "Yoğun, dolgun, klasik temel.", price: "60₺", glyph: "espresso", cat: "espresso" },
  { name: "Doppio", origin: "Çift shot · 60ml", desc: "İki katı yoğunluk, sade.", price: "75₺", glyph: "espresso", cat: "espresso" },
  { name: "Americano", origin: "Espresso + sıcak su", desc: "Hafifletilmiş, uzun içim.", price: "70₺", glyph: "espresso", cat: "espresso" },
  { name: "Cortado", origin: "Espresso + 60ml süt", desc: "Dengeli, sütün dokunuşu.", price: "85₺", glyph: "cortado", cat: "sutlu" },
  { name: "Flat White", origin: "Çift shot + mikro köpük", desc: "Pürüzsüz, kremamsı, dolgun.", price: "95₺", glyph: "flatwhite", cat: "sutlu" },
  { name: "Cappuccino", origin: "Espresso + buharlı süt", desc: "Klasik köpük, sıcak.", price: "90₺", glyph: "flatwhite", cat: "sutlu" },
  { name: "Latte", origin: "Espresso + 240ml süt", desc: "Yumuşak, sütün önde olduğu.", price: "95₺", glyph: "flatwhite", cat: "sutlu" },
  { name: "V60", origin: "Yirgacheffe · Etiyopya", desc: "Çiçeksi, narenciyeli, hafif gövde.", price: "120₺", glyph: "v60", cat: "filtre" },
  { name: "Chemex", origin: "Huila · Kolombiya", desc: "Karamel, çikolata, orta gövde.", price: "120₺", glyph: "v60", cat: "filtre" },
  { name: "Aeropress", origin: "Sidamo · Etiyopya", desc: "Tatlı, dengeli, ipeksi.", price: "110₺", glyph: "aeropress", cat: "filtre" },
  { name: "Cold Brew", origin: "16 saat · soğuk demleme", desc: "Tatlı, pürüzsüz, az asit.", price: "100₺", glyph: "cold", cat: "soguk" },
  { name: "Iced Latte", origin: "Buz + espresso + süt", desc: "Soğuk, hafif, ferah.", price: "95₺", glyph: "cold", cat: "soguk" },
  { name: "Iced Americano", origin: "Buz + espresso + su", desc: "Berrak, soğuk, klasik.", price: "75₺", glyph: "cold", cat: "soguk" },
  { name: "Cheesecake", origin: "New York stili", desc: "Yoğun, kremalı, hafif limon.", price: "120₺", glyph: "plate", cat: "yiyecek" },
  { name: "Tiramisu", origin: "Mascarpone + espresso", desc: "Klasik İtalyan, ev yapımı.", price: "130₺", glyph: "plate", cat: "yiyecek" },
  { name: "Granola Bowl", origin: "Yoğurt + meyve + bal", desc: "Sabah için hafif başlangıç.", price: "140₺", glyph: "plate", cat: "yiyecek" },
];

export default function MenuPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? MENU : MENU.filter((m) => m.cat === active);

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
            <span>Menü</span>
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
            Her gün{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              taze
            </span>
            , her fincan{" "}
            <span className="serif-italic" style={{ color: "var(--cyan)" }}>
              elle
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
            Tek köken çekirdekler ve seçilmiş demleme yöntemleri. Fiyatlar
            mağazada güncellenir.
          </p>
        </div>
      </section>

      {/* FİLTRE — sticky */}
      <section className="sticky-filter">
        <div
          className="container-lux flex items-center gap-2 overflow-x-auto no-scrollbar"
          style={{ padding: "14px 16px" }}
        >
          <span className="eyebrow whitespace-nowrap" style={{ marginRight: 4 }}>
            Filtre
          </span>
          {CATEGORIES.map((c) => (
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

      {/* MENU GRID */}
      <section
        className="bg-deep"
        style={{ paddingTop: 56, paddingBottom: 56 }}
      >
        <div className="container-lux">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "var(--line)" }}
          >
            {filtered.map((item, i) => (
              <article
                key={item.name + i}
                className="menu-card group"
                style={{
                  animation: `fade-up 0.5s cubic-bezier(0.215,0.61,0.355,1) ${(i % 9) * 0.05}s both`,
                }}
              >
                <div className="flex items-start justify-between mb-8">
                  <Glyph type={item.glyph} />
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      color: "var(--ink-3)",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.cat}
                  </span>
                </div>
                <h3>{item.name}</h3>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: "var(--electric)",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {item.origin}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "var(--ink-2)",
                    marginBottom: 18,
                  }}
                >
                  {item.desc}
                </p>
                <div
                  className="flex items-center justify-between"
                  style={{
                    paddingTop: 14,
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <span
                    className="serif-italic"
                    style={{
                      fontSize: 20,
                      color: "var(--cyan)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.price}
                  </span>
                  <span
                    className="eyebrow group-hover:text-electric transition-colors"
                    style={{ fontSize: 10 }}
                  >
                    Menüde Gör →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p style={{ color: "var(--ink-3)" }} className="eyebrow">
                Bu kategoride şu an ürün yok
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="container-lux relative">
          <div className="grid-12 items-end gap-y-10">
            <div style={{ gridColumn: "span 7 / span 7" }}>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(32px, 6vw, 88px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  maxWidth: "16ch",
                }}
              >
                Yerinde{" "}
                <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
                  tatmak
                </span>{" "}
                başka.
              </h2>
            </div>
            <div
              style={{ gridColumn: "span 5 / span 5" }}
              className="flex flex-wrap items-start md:items-end gap-4 md:flex-col md:items-end"
            >
              <Link href="/iletisim" className="btn-electric">
                Mağazaya Gel
              </Link>
              <a
                href="https://wa.me/905380684828"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Glyph({ type }: { type: string }) {
  const stroke = "var(--electric)";
  const sw = 1.4;
  const size = 32;

  if (type === "espresso")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 14h22v8c0 6-5 11-11 11s-11-5-11-11v-8z" stroke={stroke} strokeWidth={sw} />
        <path d="M30 18h4a3 3 0 0 1 0 6h-4" stroke={stroke} strokeWidth={sw} />
        <path d="M14 6c0 2-2 3-2 5M20 6c0 2-2 3-2 5M26 6c0 2-2 3-2 5" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  if (type === "v60")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 8h24l-10 18h-4L8 8z" stroke={stroke} strokeWidth={sw} />
        <path d="M18 26v6M22 26v6 M14 32h12" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  if (type === "aeropress")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect x="13" y="6" width="14" height="22" rx="1" stroke={stroke} strokeWidth={sw} />
        <path d="M13 12h14M16 28v4h8v-4" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  if (type === "cold")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M14 6h12v22c0 3-2 5-6 5s-6-2-6-5V6z" stroke={stroke} strokeWidth={sw} />
        <circle cx="20" cy="22" r="1.5" fill={stroke} />
        <circle cx="17" cy="17" r="1" fill={stroke} />
      </svg>
    );
  if (type === "cortado")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M10 16h18v10c0 3-3 6-9 6s-9-3-9-6V16z" stroke={stroke} strokeWidth={sw} />
        <path d="M28 18h3a2 2 0 0 1 0 4h-3" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  if (type === "flatwhite")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 14h22v10c0 4-4 8-11 8s-11-4-11-8V14z" stroke={stroke} strokeWidth={sw} />
        <path d="M14 20c2 1 4 1 6 0s4-1 6 0" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  if (type === "plate")
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="24" rx="14" ry="3" stroke={stroke} strokeWidth={sw} />
        <ellipse cx="20" cy="22" rx="10" ry="2" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  return null;
}
