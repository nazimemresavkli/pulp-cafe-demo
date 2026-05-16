"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hikayemiz" },
  { href: "/menu", label: "Menü" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Günlük" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ÜST INFO STRIP — koyu */}
      <div
        className="w-full"
        style={{
          background: "var(--bg-2)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="container-lux flex items-center justify-between"
          style={{ height: 36 }}
        >
          <div className="hidden md:flex items-center gap-8 eyebrow">
            <span style={{ color: "var(--ink-2)" }}>Serdivan · Sakarya</span>
            <span style={{ color: "var(--ink-3)", opacity: 0.5 }}>·</span>
            <span style={{ color: "var(--ink-2)" }}>Her gün 09:00 — 01:00</span>
            <span style={{ color: "var(--ink-3)", opacity: 0.5 }}>·</span>
            <span
              className="inline-flex items-center gap-2 eyebrow-electric"
              style={{ color: "var(--electric)" }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--electric)",
                  boxShadow: "0 0 8px var(--electric)",
                }}
                className="pulse-glow"
              />
              Şu an açık
            </span>
          </div>
          <div className="flex items-center gap-6 eyebrow md:ml-auto">
            <a
              href="https://wa.me/905380684828"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink-2)" }}
              className="hover:text-ink transition-colors"
            >
              0538 068 48 28
            </a>
            <span style={{ color: "var(--ink-3)", opacity: 0.5 }} className="hidden md:inline">·</span>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink-2)" }}
              className="hidden md:inline hover:text-ink transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* ANA NAVBAR */}
      <header
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 16, 32, 0.78)"
            : "var(--bg)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        }}
      >
        <div className="container-lux">
          <div
            className="flex items-center justify-between"
            style={{ height: 88 }}
          >
            {/* SOL — LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <PMonogram />
              <div className="hidden sm:flex flex-col leading-none">
                <span
                  className="serif"
                  style={{
                    fontSize: 20,
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                  }}
                >
                  Pulp
                </span>
                <span
                  className="eyebrow"
                  style={{
                    fontSize: 9,
                    marginTop: 4,
                    color: "var(--electric)",
                    letterSpacing: "0.28em",
                  }}
                >
                  Coffee Lab
                </span>
              </div>
            </Link>

            {/* ORTA — MENÜ */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group sans"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: active ? "var(--ink)" : "var(--ink-2)",
                      fontWeight: active ? 500 : 400,
                      paddingBottom: 4,
                      transition: "color 0.3s ease",
                    }}
                  >
                    <span>{link.label}</span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 1,
                        background: "var(--electric)",
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.5s cubic-bezier(0.65,0,0.35,1)",
                        boxShadow: active ? "0 0 8px var(--electric)" : "none",
                      }}
                      className="group-hover:scale-x-100"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* SAĞ — CTA + MOBİL TOGGLE */}
            <div className="flex items-center gap-4">
              <Link href="/menu" className="hidden md:inline-flex btn-ghost">
                Menüyü Gör
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col items-center justify-center gap-1.5"
                style={{ width: 40, height: 40 }}
                aria-label="Menüyü aç"
              >
                <span
                  style={{
                    width: 22,
                    height: 1,
                    background: "var(--ink)",
                    transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
                    transition: "all 0.3s ease",
                  }}
                />
                <span
                  style={{
                    width: 22,
                    height: 1,
                    background: "var(--ink)",
                    transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* MOBİL MENÜ */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: menuOpen ? 540 : 0,
            borderTop: menuOpen ? "1px solid var(--line)" : "none",
            background: "var(--bg)",
          }}
        >
          <div className="container-lux py-8 flex flex-col gap-5">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="serif"
                style={{
                  fontSize: 30,
                  color: pathname === link.href ? "var(--electric)" : "var(--ink)",
                  animation: menuOpen
                    ? `fade-up 0.6s cubic-bezier(0.215,0.61,0.355,1) ${i * 0.06}s both`
                    : "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="hairline" style={{ margin: "12px 0" }} />
            <Link
              href="/menu"
              className="btn-electric"
              style={{ alignSelf: "flex-start" }}
            >
              Menüyü Gör
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

/* P MONOGRAM — neon glow ile */
function PMonogram() {
  return (
    <span
      className="inline-flex items-center justify-center coin-flip relative"
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
  );
}
