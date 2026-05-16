"use client";

import { useState } from "react";

const INFO = [
  {
    label: "Adres",
    value: "Kemalpaşa, Dağköy Sk. No:8/B\n54050 Serdivan / Sakarya",
    link: "https://maps.google.com/?q=Kemalpaşa+Dağköy+Sk+No+8+Serdivan+Sakarya",
    linkLabel: "Yol Tarifi",
  },
  {
    label: "Saatler",
    value: "Her gün\n09:00 — 01:00",
  },
  {
    label: "Telefon",
    value: "0538 068 48 28",
    link: "tel:05380684828",
    linkLabel: "Ara",
  },
  {
    label: "WhatsApp",
    value: "Anında yanıt",
    link: "https://wa.me/905380684828",
    linkLabel: "Mesaj At",
  },
];

export default function IletisimPage() {
  const [sent, setSent] = useState(false);

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
            <span>İletişim</span>
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
            Birinin{" "}
            <span className="serif-italic glow-text" style={{ color: "var(--cyan)" }}>
              dinlediği
            </span>{" "}
            bir cafe.
          </h1>
          <p
            className="fu2 mt-12"
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-2)",
              maxWidth: "48ch",
            }}
          >
            Mağaza, sipariş, etkinlik, iş birliği. Yazın, hızlı dönüyoruz.
          </p>
          <div className="mt-10 flex items-center gap-3 eyebrow eyebrow-electric fu3">
            <span className="live-dot" />
            <span>Şu an açığız · 01:00'a kadar</span>
          </div>
        </div>
      </section>

      {/* INFO ŞERİDİ */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="container-lux">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "var(--line)" }}
          >
            {INFO.map((info) => (
              <div
                key={info.label}
                style={{
                  background: "var(--bg-2)",
                  padding: "40px 32px",
                }}
              >
                <div className="eyebrow mb-4">{info.label}</div>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                    marginBottom: info.link ? 16 : 0,
                  }}
                >
                  {info.value}
                </p>
                {info.link && (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="link-reveal"
                  >
                    {info.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section bg-deep">
        <div className="container-lux">
          <div className="grid-12 items-start gap-y-16">
            <div style={{ gridColumn: "span 5 / span 5" }}>
              <div className="section-num mb-8">
                <span>01 — Yazın</span>
              </div>
              <h2
                className="serif text-balance"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  maxWidth: "14ch",
                }}
              >
                Birkaç{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  satır
                </span>{" "}
                yeterli.
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  marginTop: 20,
                  maxWidth: "40ch",
                }}
              >
                Sipariş için WhatsApp daha hızlı. Daha uzun bir konu için
                bu form uygun.
              </p>
            </div>

            <div style={{ gridColumn: "span 7 / span 7" }}>
              {sent ? (
                <div
                  className="frame"
                  style={{
                    padding: 48,
                    textAlign: "center",
                  }}
                >
                  <div className="eyebrow eyebrow-electric mb-6">Teşekkürler</div>
                  <h3
                    className="serif"
                    style={{ fontSize: 36, letterSpacing: "-0.02em" }}
                  >
                    Mesajınız{" "}
                    <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                      ulaştı
                    </span>
                    .
                  </h3>
                  <p
                    style={{
                      marginTop: 16,
                      fontSize: 14,
                      color: "var(--ink-2)",
                    }}
                  >
                    En geç birkaç saat içinde dönüyoruz.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-10"
                >
                  <Field label="Ad Soyad" name="name" placeholder="adınız" />
                  <Field
                    label="E-posta"
                    name="email"
                    type="email"
                    placeholder="size nasıl ulaşalım?"
                  />
                  <Field
                    label="Konu"
                    name="subject"
                    placeholder="kısa bir başlık"
                  />
                  <Field
                    label="Mesaj"
                    name="message"
                    placeholder="anlatmak istediğiniz"
                    textarea
                  />
                  <button type="submit" className="btn-electric self-start mt-4">
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HARİTA */}
      <section
        className="relative"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <div className="container-lux" style={{ paddingTop: 80, paddingBottom: 24 }}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-num mb-8">
                <span>02 — Konum</span>
              </div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  maxWidth: "14ch",
                }}
              >
                Serdivan'ın{" "}
                <span className="serif-italic" style={{ color: "var(--cyan)" }}>
                  içinde
                </span>
                .
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Kemalpaşa+Dağköy+Sk+No+8+Serdivan+Sakarya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hidden md:inline-flex"
            >
              Google Maps'te Aç
            </a>
          </div>
        </div>

        <div
          style={{
            height: 560,
            width: "100%",
            position: "relative",
            filter: "grayscale(60%) invert(0.9) contrast(0.85) hue-rotate(180deg)",
            opacity: 0.85,
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=Kemalpaşa,+Dağköy+Sk.+No:8/B,+54050+Serdivan/Sakarya&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <div className="eyebrow mb-3">{label}</div>
      <div style={{ borderBottom: "1px solid var(--line-2)" }}>
        {textarea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows={3}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--ink)",
              fontSize: 18,
              fontFamily: "var(--font-fraunces), serif",
              letterSpacing: "-0.01em",
              padding: "10px 0 16px",
              resize: "none",
            }}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--ink)",
              fontSize: 18,
              fontFamily: "var(--font-fraunces), serif",
              letterSpacing: "-0.01em",
              padding: "10px 0 16px",
            }}
          />
        )}
      </div>
    </label>
  );
}
