"use client";

import Link from "next/link";

const VALUES = [
  {
    num: "I",
    title: "Tek köken çekirdek",
    desc:
      "Hangi çiftlikten, hangi yükseklikten geldiğini bildiğimiz kahve. Karışım değil, izi sürülebilen tek bir hikaye.",
  },
  {
    num: "II",
    title: "Barista zanaatı",
    desc:
      "Çekirdek, su, basınç, sıcaklık. Her parametre elde. Her fincan bir karar değil, bir disiplin.",
  },
  {
    num: "III",
    title: "Sakin atmosfer",
    desc:
      "Gürültüsüz, ışığı doğru ölçülmüş bir mekan. Kahve içmek için ya da sadece oturmak için.",
  },
  {
    num: "IV",
    title: "Gece kahvesi",
    desc:
      "Sabah erkenden gece bire kadar açık. Şehrin yavaşladığı saatte hâlâ demlenir.",
  },
];

const SPECS = [
  { label: "Kuruluş", value: "2025" },
  { label: "Konum", value: "Serdivan" },
  { label: "Mesai", value: "16 saat" },
  { label: "Yöntem", value: "8+" },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-radial-glow relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="container-lux relative"
          style={{ paddingTop: 120, paddingBottom: 96 }}
        >
          <div className="section-num mb-16 fu">
            <span>Hakkımızda</span>
          </div>
          <h1
            className="serif text-balance fu1"
            style={{
              fontSize: "clamp(48px, 9vw, 144px)",
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              maxWidth: "16ch",
            }}
          >
            Küçük bir atölye,{" "}
            <span
              className="serif-italic glow-text"
              style={{ color: "var(--cyan)" }}
            >
              büyük
            </span>{" "}
            bir disiplin.
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
            Pulp, specialty kahveyi bir gösteri değil, bir alışkanlık olarak
            kuran küçük bir mekan. Tek köken çekirdek, hassas demleme,
            ölçülü bir mimari — birinin gününü hafifletmek için yeterli.
          </p>

          <div className="spec-row mt-20 fu3">
            {SPECS.map((s) => (
              <div key={s.label}>
                <div className="spec-label">{s.label}</div>
                <div className="spec-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — BAŞLANGIÇ */}
      <section
        className="section"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <div className="container-lux">
          <div className="grid-12 items-start gap-y-12">
            <div style={{ gridColumn: "span 4 / span 4" }}>
              <div className="section-num mb-6">
                <span>01 — Başlangıç</span>
              </div>
            </div>
            <div
              style={{ gridColumn: "5 / span 7" }}
              className="space-y-6"
            >
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                Her şey bir{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  fincanla
                </span>{" "}
                başladı.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
                Sakarya'da specialty kahvenin kıt olduğu bir dönemde, küçük
                bir ekipmanla iyi bir espresso çıkarmak fikriydi. Aylar süren
                deneme — çekirdek, kavurma profili, su sertliği — bir mekana
                dönüştü.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
                Pulp bugün, sabaha kadar açık bir cafe değil; geceleri sakince
                demlenen, gündüzleri hızla akan bir atölye. Müşteri değil,
                misafir. Sipariş değil, ritüel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEĞERLER */}
      <section className="section bg-deep">
        <div className="container-lux">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="section-num mb-8">
                <span>02 — Değerler</span>
              </div>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  maxWidth: "14ch",
                }}
              >
                Dört{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  ilke
                </span>
                .
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "var(--line)" }}
          >
            {VALUES.map((v, i) => (
              <div
                key={v.num}
                style={{
                  background: "var(--bg)",
                  padding: "48px 32px",
                  animation: `fade-up 0.9s cubic-bezier(0.215,0.61,0.355,1) ${i * 0.1}s both`,
                }}
              >
                <div
                  className="mono mb-8"
                  style={{
                    fontSize: 32,
                    color: "var(--electric)",
                    fontWeight: 500,
                  }}
                >
                  {v.num}
                </div>
                <h3
                  className="serif mb-4"
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.2,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--bg-2)" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(77, 139, 245, 0.14), transparent 60%)",
          }}
        />
        <div className="container-lux relative">
          <div className="section-num mb-16">
            <span>03 — Felsefe</span>
          </div>
          <blockquote
            className="serif text-balance"
            style={{
              fontSize: "clamp(36px, 6.5vw, 96px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "22ch",
            }}
          >
            Kahve bir{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              ürün
            </span>{" "}
            değil. Bir{" "}
            <span className="serif-italic" style={{ color: "var(--cyan)" }}>
              an
            </span>{" "}
            ve birinin onu fark etmesi.
          </blockquote>
        </div>
      </section>

      {/* VİZYON */}
      <section className="section bg-deep">
        <div className="container-lux">
          <div className="grid-12 items-start gap-y-12">
            <div style={{ gridColumn: "span 4 / span 4" }}>
              <div className="section-num mb-6">
                <span>04 — Vizyon</span>
              </div>
            </div>
            <div
              style={{ gridColumn: "5 / span 7" }}
              className="space-y-6"
            >
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                Şehirde küçük bir{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  duraklama
                </span>{" "}
                noktası olmak.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
                Pulp büyümeyi hızlı bir hedef olarak görmüyor. Küçük olmak,
                hassas olmaya alan açıyor. Niyet, Serdivan'da specialty kahveyi
                bir alışkanlık haline getirmek.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
                Önümüzdeki dönemde — eğitimler, tatma seansları, küçük
                koleksiyonlar. Hep aynı mekanda, hep aynı ekiple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--bg-2)", padding: "140px 0" }}
      >
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="container-lux relative">
          <h2
            className="serif text-balance"
            style={{
              fontSize: "clamp(40px, 7vw, 112px)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              maxWidth: "16ch",
            }}
          >
            Mağazaya{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              gelin
            </span>
            .
          </h2>
          <div className="flex items-center gap-4 mt-12">
            <Link href="/iletisim" className="btn-electric">
              İletişim
            </Link>
            <Link href="/menu" className="btn-ghost">
              Menüyü Gör
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
