"use client";

import Link from "next/link";

const MARQUEE = [
  "Espresso", "V60", "Aeropress", "Chemex", "Cold Brew",
  "Flat White", "Cortado", "Filtre", "Mocha Pot", "Latte",
];

const METHODS = [
  {
    num: "01",
    name: "Espresso",
    sub: "9 bar · 30 sn",
    desc: "İnce öğüt, yoğun basınç. Bir fincanın özü.",
    glyph: "espresso",
  },
  {
    num: "02",
    name: "V60",
    sub: "94°C · 3:00",
    desc: "Pour-over berraklığı. Aromaların solo gösterisi.",
    glyph: "v60",
  },
  {
    num: "03",
    name: "Aeropress",
    sub: "90°C · 1:30",
    desc: "Hassas bir denge. Yumuşak ve dolgun.",
    glyph: "aeropress",
  },
  {
    num: "04",
    name: "Cold Brew",
    sub: "16 saat · 4°C",
    desc: "Soğukta sabırla demlenir. Tatlı, pürüzsüz.",
    glyph: "cold",
  },
];

const JOURNAL = [
  {
    tag: "Demleme",
    date: "12 / 05 / 26",
    title: "V60'da debiyi nasıl okuruz?",
    excerpt:
      "Tek bir bardağın sırrı, suyun nasıl aktığında saklı. Üç dakikalık bir gözlem.",
  },
  {
    tag: "Çekirdek",
    date: "07 / 05 / 26",
    title: "Etiyopya Yirgacheffe — bir profil",
    excerpt:
      "Çiçeksi, narenciyeli, hafif. Specialty kahvenin klasik referansı.",
  },
  {
    tag: "Atölye",
    date: "01 / 05 / 26",
    title: "Geceleri neden kahve içeriz?",
    excerpt:
      "Pulp'ta bire kadar açığız. Bunun ardındaki şehir hikayesi.",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-radial-glow relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="container-lux relative"
          style={{ paddingTop: 96, paddingBottom: 120 }}
        >
          {/* Üst meta şerit */}
          <div className="flex items-center justify-between mb-20 fu">
            <div className="section-num">
              <span>Pulp / Specialty Coffee</span>
            </div>
            <div className="hidden md:flex items-center gap-3 eyebrow eyebrow-electric">
              <span className="live-dot" />
              <span>Şu an açık · 09:00 — 01:00</span>
            </div>
          </div>

          {/* Hero başlık */}
          <div className="grid-12 items-end">
            <div style={{ gridColumn: "span 9 / span 9" }}>
              <h1
                className="serif text-balance fu1"
                style={{
                  fontSize: "clamp(56px, 11vw, 168px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.035em",
                }}
              >
                Feel the{" "}
                <span
                  className="serif-italic glow-text"
                  style={{ color: "var(--cyan)" }}
                >
                  timeless
                </span>
                <br />
                flow.
              </h1>
            </div>

            {/* Sağ alt — display num */}
            <div
              className="hidden lg:flex items-end justify-end fu2"
              style={{ gridColumn: "span 3 / span 3" }}
            >
              <span className="display-num" style={{ fontSize: 200 }}>
                01
              </span>
            </div>
          </div>

          {/* Alt blok */}
          <div className="grid-12 mt-16 fu3">
            <div
              style={{ gridColumn: "span 5 / span 5" }}
              className="col-span-12"
            >
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  maxWidth: "48ch",
                }}
              >
                Sakarya Serdivan'da küçük bir specialty kahve atölyesi.
                Tek köken çekirdekler, hassas demleme, geç saatlere kadar
                sakin bir atmosfer.
              </p>
              <div className="flex items-center gap-4 mt-10">
                <Link href="/menu" className="btn-electric">
                  Menüyü Gör
                </Link>
                <Link href="/hakkimizda" className="btn-ghost">
                  Hikayemiz
                </Link>
              </div>
            </div>
          </div>

          {/* Spec şeridi */}
          <div className="spec-row mt-24 fu4">
            <div>
              <div className="spec-label">Sıcaklık</div>
              <div className="spec-value">94°C</div>
            </div>
            <div>
              <div className="spec-label">Basınç</div>
              <div className="spec-value">9 bar</div>
            </div>
            <div>
              <div className="spec-label">Çekirdek</div>
              <div className="spec-value">Tek köken</div>
            </div>
            <div>
              <div className="spec-label">Kapanış</div>
              <div className="spec-value">01:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <section
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          background: "var(--bg-2)",
          padding: "32px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={i}
              className="serif"
              style={{
                fontSize: 40,
                paddingRight: 64,
                color: i % 3 === 1 ? "var(--cyan)" : "var(--ink)",
                fontStyle: i % 3 === 1 ? "italic" : "normal",
                whiteSpace: "nowrap",
              }}
            >
              {item} <span style={{ color: "var(--ink-4)", marginLeft: 24 }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ═══ HİKAYE — 02 ═══ */}
      <section className="section bg-deep">
        <div className="container-lux">
          <div className="section-num mb-16">
            <span>02 — Hikaye</span>
          </div>

          <div className="grid-12 items-start">
            <div style={{ gridColumn: "span 5 / span 5" }}>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Bir baristanın{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  yolculuğu
                </span>{" "}
                bir fincanda biter.
              </h2>
            </div>
            <div
              style={{ gridColumn: "5 / span 6", paddingLeft: 40 }}
              className="space-y-6"
            >
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
                Pulp, küçük bir atölye gibi çalışır. Çekirdek seçimi, kavurma
                izleme, demleme parametreleri — her detayda elimiz var.
                Sakarya'nın orta yerinde, ama specialty kahve dünyasının
                içinde bir nokta.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
                Sabah açılır, gece bire kadar açıktır. Erken bir espresso
                kadar, geç bir filtre kahve de Pulp'ın doğal ritmidir.
              </p>
              <Link href="/hakkimizda" className="link-reveal mt-8 inline-block">
                Hikayenin tamamı
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ METHODS — 03 ═══ */}
      <section
        className="section"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="container-lux">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="section-num mb-8">
                <span>03 — Yöntemler</span>
              </div>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  maxWidth: "16ch",
                }}
              >
                Dört{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  ana
                </span>{" "}
                demleme.
              </h2>
            </div>
            <Link
              href="/menu"
              className="link-reveal hidden md:inline-block"
            >
              Tüm menü
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODS.map((m, i) => (
              <div
                key={m.name}
                className="frame img-zoom"
                style={{
                  padding: 32,
                  paddingTop: 40,
                  paddingBottom: 40,
                  cursor: "pointer",
                  animation: `fade-up 0.9s cubic-bezier(0.215,0.61,0.355,1) ${i * 0.1}s both`,
                }}
              >
                <div className="flex items-center justify-between mb-12">
                  <span
                    className="mono"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      color: "var(--electric)",
                    }}
                  >
                    {m.num}
                  </span>
                  <Glyph type={m.glyph} />
                </div>
                <h3
                  className="serif"
                  style={{
                    fontSize: 32,
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                  }}
                >
                  {m.name}
                </h3>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "var(--ink-3)",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {m.sub}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FELSEFE — 04 ═══ */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(77, 139, 245, 0.12), transparent 60%)",
          }}
        />
        <div className="container-lux relative">
          <div className="section-num mb-16">
            <span>04 — Felsefe</span>
          </div>
          <blockquote
            className="serif text-balance mx-auto text-center"
            style={{
              fontSize: "clamp(36px, 6vw, 88px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "20ch",
            }}
          >
            İyi kahve{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              sabırla
            </span>{" "}
            biter,{" "}
            <span className="serif-italic" style={{ color: "var(--cyan)" }}>
              aceleyle
            </span>{" "}
            başlamaz.
          </blockquote>
          <div
            className="eyebrow text-center mt-16"
            style={{ color: "var(--ink-3)" }}
          >
            — Pulp Atölyesi
          </div>
        </div>
      </section>

      {/* ═══ GÜNLÜK — 05 ═══ */}
      <section
        className="section"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <div className="container-lux">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="section-num mb-8">
                <span>05 — Günlük</span>
              </div>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Atölyeden{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  notlar
                </span>
                .
              </h2>
            </div>
            <Link href="/blog" className="link-reveal hidden md:inline-block">
              Tüm yazılar
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL.map((j, i) => (
              <Link
                key={j.title}
                href="/blog"
                className="group block"
                style={{
                  animation: `fade-up 0.9s cubic-bezier(0.215,0.61,0.355,1) ${i * 0.1}s both`,
                }}
              >
                <div
                  className="img-zoom mb-6"
                  style={{
                    aspectRatio: "4 / 5",
                    background:
                      "linear-gradient(135deg, var(--bg-3), var(--bg))",
                    border: "1px solid var(--line)",
                    position: "relative",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(77, 139, 245, 0.15), transparent)",
                    }}
                  >
                    <Glyph type={i === 0 ? "v60" : i === 1 ? "espresso" : "cold"} large />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3 eyebrow">
                  <span style={{ color: "var(--electric)" }}>{j.tag}</span>
                  <span style={{ color: "var(--ink-3)" }}>·</span>
                  <span style={{ color: "var(--ink-3)" }}>{j.date}</span>
                </div>
                <h3
                  className="serif"
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.15,
                    marginBottom: 12,
                  }}
                >
                  {j.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",
                  }}
                >
                  {j.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ZİYARET — 06 ═══ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--bg)", padding: "140px 0" }}
      >
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45, 90, 135, 0.25), transparent 60%)",
          }}
        />
        <div className="container-lux relative">
          <div className="section-num mb-16">
            <span>06 — Ziyaret</span>
          </div>
          <h2
            className="serif text-balance"
            style={{
              fontSize: "clamp(40px, 7vw, 112px)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              maxWidth: "18ch",
            }}
          >
            Bir fincan kahve,{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              yeterli
            </span>{" "}
            sebeptir.
          </h2>

          <div className="grid-12 mt-20">
            <div style={{ gridColumn: "span 6 / span 6" }}>
              <div className="space-y-6">
                <div>
                  <div className="eyebrow mb-2">Adres</div>
                  <p
                    className="serif"
                    style={{ fontSize: 24, letterSpacing: "-0.01em" }}
                  >
                    Kemalpaşa, Dağköy Sk. No:8/B
                    <br />
                    54050 Serdivan / Sakarya
                  </p>
                </div>
                <div>
                  <div className="eyebrow mb-2">Saatler</div>
                  <p
                    className="serif"
                    style={{ fontSize: 24, letterSpacing: "-0.01em" }}
                  >
                    Her gün <span style={{ color: "var(--cyan)" }}>09:00 — 01:00</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ gridColumn: "span 6 / span 6" }}
              className="flex flex-col gap-4 items-start md:items-end justify-end"
            >
              <a
                href="https://maps.google.com/?q=Kemalpaşa+Dağköy+Sk+No+8+Serdivan+Sakarya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric"
              >
                Yol Tarifi Al
              </a>
              <a
                href="https://wa.me/905380684828"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp · 0538 068 48 28
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══ SVG Glyph'ler ═══ */
function Glyph({ type, large = false }: { type: string; large?: boolean }) {
  const size = large ? 96 : 40;
  const stroke = "var(--electric)";
  const sw = large ? 1.2 : 1.4;

  if (type === "espresso") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 14h22v8c0 6-5 11-11 11s-11-5-11-11v-8z" stroke={stroke} strokeWidth={sw} />
        <path d="M30 18h4a3 3 0 0 1 0 6h-4" stroke={stroke} strokeWidth={sw} />
        <path d="M14 6c0 2-2 3-2 5M20 6c0 2-2 3-2 5M26 6c0 2-2 3-2 5" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (type === "v60") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M8 8h24l-10 18h-4L8 8z" stroke={stroke} strokeWidth={sw} />
        <path d="M18 26v6M22 26v6M14 32h12" stroke={stroke} strokeWidth={sw} />
        <path d="M12 14h16M14 18h12M16 22h8" stroke={stroke} strokeWidth={sw} opacity="0.5" />
      </svg>
    );
  }
  if (type === "aeropress") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect x="13" y="6" width="14" height="22" rx="1" stroke={stroke} strokeWidth={sw} />
        <path d="M13 12h14M16 28v4h8v-4" stroke={stroke} strokeWidth={sw} />
        <circle cx="20" cy="9" r="1.5" fill={stroke} />
      </svg>
    );
  }
  if (type === "cold") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M14 6h12v22c0 3-2 5-6 5s-6-2-6-5V6z" stroke={stroke} strokeWidth={sw} />
        <path d="M14 14h12M14 20h12M14 26h12" stroke={stroke} strokeWidth={sw} opacity="0.4" />
        <circle cx="20" cy="22" r="1.5" fill={stroke} />
        <circle cx="17" cy="17" r="1" fill={stroke} />
        <circle cx="23" cy="25" r="1" fill={stroke} />
      </svg>
    );
  }
  return null;
}
