import { useState, useEffect, useRef } from "react";

const tx = {
  en: {
    nav: { services: "Services", cases: "Case Studies", audit: "Free Audit", about: "About Us", cta: "Get a Free Consultation" },
    hero: {
      h1_1: "Empowering SMEs",
      h1_2: "with AI Automation",
      sub: "Don't get left behind. Implement real AI solutions for growth, efficiency, and competitive edge.",
      cta1: "Get a Free Consultation",
      cta2: "Learn More"
    },
    services: {
      h2: "Our Services",
      sub: "AI Solutions Tailored for Your Business",
      items: [
        { icon: "⚙️", title: "Process Automation", desc: "Streamline operations and eliminate repetitive manual tasks. We identify and automate the workflows costing you the most time." },
        { icon: "📊", title: "AI & Data Analytics", desc: "Gain actionable insights from your existing data. Make faster, smarter decisions backed by intelligent analysis." },
        { icon: "📄", title: "Document Intelligence", desc: "Automate document processing, classification, and extraction. From invoices to compliance reports — handled in seconds." },
        { icon: "🎓", title: "Training & Embedding", desc: "Tools without adoption are wasted investment. We train your team hands-on so AI becomes part of daily operations." }
      ]
    },
    audit: {
      h2: "Free 24-Hour AI Audit",
      sub: "Submit your website or describe your business. Within 24 hours, receive a custom strategy deck with concrete AI implementation opportunities — prioritized by ROI.",
      placeholder_url: "Your website URL",
      placeholder_desc: "Or describe your business briefly...",
      placeholder_email: "Your email address",
      btn: "Request Free Audit",
      success: "✓ Request received! Your custom AI strategy deck will be delivered within 24 hours.",
      trust: ["No obligation", "Delivered within 24h", "Actionable, not generic"]
    },
    why: {
      h2: "Why Choose Us?",
      items: [
        { icon: "🏆", title: "Deep Expertise", desc: "6+ years managing $3bn in alternative credit, now applied to AI implementation for real businesses." },
        { icon: "🎯", title: "Custom Solutions", desc: "No generic playbooks. Every engagement starts with your specific workflows, challenges, and goals." },
        { icon: "📈", title: "Proven Results", desc: "Measurable ROI within weeks. Our clients recover 40+ hours per month and redirect capacity to growth." }
      ]
    },
    cases: {
      h2: "Case Studies",
      sub: "Real Results from Real Businesses",
      items: [
        {
          ind: "Construction Management",
          challenge: "A mid-sized construction firm was losing 50+ hours/week to manual timesheets, document filing, subcontractor coordination, and compliance reporting.",
          approach: "We audited 23 workflows, identified 14 automation candidates, and deployed document classification, automated reporting, and AI-assisted scheduling within 6 weeks.",
          results: ["47 hrs/month freed", "Document processing –70%", "Reporting: 2 days → 20 min", "Team on billable work"],
          quote: "We didn't realize how much time we were burning until someone showed us the alternative."
        },
        {
          ind: "Insolvency Practice",
          challenge: "An insolvency practice was bottlenecked by case documentation — creditor correspondence, asset tracing, statutory filings, and case summaries consumed the entire team's bandwidth.",
          approach: "We deployed AI document analysis for claim extraction, automated deadline tracking, and template-driven summaries that cut drafting time by 80%.",
          results: ["Case capacity ×3", "Response time halved", "Compliance automated", "Senior staff freed"],
          quote: "The ROI was obvious within the first month. We should have done this a year ago."
        }
      ],
      resLabel: "Results"
    },
    curve: {
      h2: "The Exponential Curve",
      sub: "AI adoption is at the inflection point. The gap between adopters and non-adopters is about to widen exponentially.",
      p: "In 12 months, catching up will cost 10× what starting today costs.",
      ly: "You are here", le: "Early adopters", ll: "Cost of waiting grows"
    },
    stats: [
      { num: "85%", label: "of SMEs have no AI strategy" },
      { num: "40+", label: "hours/month recoverable" },
      { num: "6–12mo", label: "head start for early movers" }
    ],
    footer: {
      h2: "Ready to Automate Your Business?",
      sub: "Schedule your free consultation today and discover where AI fits in your operations.",
      btn: "Get Started",
      copy: "© 2026 Tenfold AI Consulting. All rights reserved.",
      priv: "Privacy Policy"
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        { h: "1. Overview", p: "We are committed to protecting your privacy. This policy explains how we collect and use your data when you use our website. We are UK-based and follow the GDPR (Data Protection Act 2018)." },
        { h: "2. Data Controller", p: "Tenfold AI Consulting\nEmail: [YOUR EMAIL]" },
        { h: "3. Data We Collect", p: "We collect data through our audit request form (email, website URL, description) and standard technical data (IP address, browser type) via our hosting provider." },
        { h: "4. How We Use Your Data", p: "Data submitted via forms is used purely to provide the services you requested. Technical data is used to maintain site health and security." },
        { h: "5. Analytics & Cookies", p: "We use Vercel Analytics to understand site traffic. This is a privacy-first tool that does not use cookies and does not collect personal data. No cookie banner is required." },
        { h: "6. Hosting", p: "Our website is hosted on Vercel. They process technical data necessary for site delivery, which is deleted automatically." },
        { h: "7. Your Rights", p: "If you are in the UK or EU, you have the right to access, correct, or delete your data. Contact us at the email provided above." }
      ]
    }
  },
  de: {
    nav: { services: "Leistungen", cases: "Fallstudien", audit: "Gratis Audit", about: "Über uns", cta: "Kostenlose Beratung" },
    hero: {
      h1_1: "KI-Automatisierung",
      h1_2: "für den Mittelstand",
      sub: "Verlieren Sie nicht den Anschluss. Praxisnahe KI-Lösungen für Wachstum, Effizienz und Wettbewerbsvorteile.",
      cta1: "Kostenlose Beratung",
      cta2: "Mehr erfahren"
    },
    services: {
      h2: "Unsere Leistungen",
      sub: "KI-Lösungen, maßgeschneidert für Ihr Unternehmen",
      items: [
        { icon: "⚙️", title: "Prozessautomatisierung", desc: "Abläufe optimieren und repetitive manuelle Aufgaben eliminieren. Wir identifizieren und automatisieren die Workflows, die Sie am meisten Zeit kosten." },
        { icon: "📊", title: "KI & Datenanalyse", desc: "Handlungsrelevante Insights aus Ihren vorhandenen Daten. Schnellere, klügere Entscheidungen durch intelligente Analyse." },
        { icon: "📄", title: "Dokumenten-Intelligenz", desc: "Automatisierte Dokumentenverarbeitung, Klassifizierung und Extraktion. Von Rechnungen bis Compliance-Berichte — in Sekunden erledigt." },
        { icon: "🎓", title: "Schulung & Verankerung", desc: "Tools ohne Adoption sind verschwendetes Investment. Praxisnahe Schulung, damit KI Teil des Arbeitsalltags wird." }
      ]
    },
    audit: {
      h2: "Kostenloses 24h KI-Audit",
      sub: "Teilen Sie Ihre Website oder beschreiben Sie Ihr Unternehmen. Innerhalb von 24 Stunden erhalten Sie ein maßgeschneidertes Strategie-Deck mit konkreten KI-Möglichkeiten — priorisiert nach ROI.",
      placeholder_url: "Ihre Website-URL",
      placeholder_desc: "Oder beschreiben Sie Ihr Unternehmen kurz...",
      placeholder_email: "Ihre E-Mail-Adresse",
      btn: "Kostenloses Audit anfordern",
      success: "✓ Anfrage erhalten! Ihr individuelles KI-Strategie-Deck wird innerhalb von 24 Stunden geliefert.",
      trust: ["Keine Verpflichtung", "Lieferung in 24h", "Konkret, nicht generisch"]
    },
    why: {
      h2: "Warum Tenfold?",
      items: [
        { icon: "🏆", title: "Fundierte Expertise", desc: "6+ Jahre Verwaltung von $3 Mrd. in alternativen Krediten, nun angewandt auf KI-Implementierung für echte Unternehmen." },
        { icon: "🎯", title: "Individuelle Lösungen", desc: "Keine generischen Konzepte. Jedes Engagement beginnt bei Ihren spezifischen Abläufen, Herausforderungen und Zielen." },
        { icon: "📈", title: "Messbare Ergebnisse", desc: "ROI innerhalb von Wochen. Unsere Kunden gewinnen 40+ Stunden/Monat zurück und lenken Kapazität auf Wachstum." }
      ]
    },
    cases: {
      h2: "Fallstudien",
      sub: "Echte Ergebnisse aus echten Unternehmen",
      items: [
        {
          ind: "Baumanagement",
          challenge: "Ein mittelständisches Bauunternehmen verlor 50+ Stunden/Woche an manuelle Zeiterfassung, Ablage, Subunternehmer-Koordination und Compliance-Berichte.",
          approach: "23 Workflows auditiert, 14 Automatisierungskandidaten identifiziert. In 6 Wochen: Dokumentenklassifizierung, automatisierte Berichte und KI-gestützte Planung.",
          results: ["47 Std./Monat frei", "Dokumente –70%", "Reporting: 2 Tage → 20 Min", "Team auf Kernarbeit"],
          quote: "Uns war nicht bewusst, wie viel Zeit wir verbrennen — bis uns jemand die Alternative zeigte."
        },
        {
          ind: "Insolvenzverwaltung",
          challenge: "Eine Kanzlei war durch Fallakten-Volumen blockiert — Gläubigerkorrespondenz, Vermögensermittlung, gesetzliche Meldungen banden die gesamte Praxis.",
          approach: "KI-Dokumentenanalyse für Forderungen, automatisierte Fristenverfolgung und vorlagenbasierte Zusammenfassungen mit 80% weniger Entwurfszeit.",
          results: ["Kapazität ×3", "Antwortzeit halbiert", "Compliance automatisiert", "Berater für Mandate frei"],
          quote: "Der ROI war im ersten Monat offensichtlich. Hätten wir vor einem Jahr machen sollen."
        }
      ],
      resLabel: "Ergebnisse"
    },
    curve: {
      h2: "Die exponentielle Kurve",
      sub: "KI-Adoption steht am Wendepunkt. Der Abstand zwischen Anwendern und Nicht-Anwendern wächst bald exponentiell.",
      p: "In 12 Monaten kostet das Aufholen 10× so viel wie der Start heute.",
      ly: "Sie sind hier", le: "Early Adopter", ll: "Kosten steigen hier"
    },
    stats: [
      { num: "85%", label: "der KMU ohne KI-Strategie" },
      { num: "40+", label: "Stunden/Monat einsparbar" },
      { num: "6–12Mo", label: "Vorsprung für Frühstarter" }
    ],
    footer: {
      h2: "Bereit für die Automatisierung?",
      sub: "Vereinbaren Sie Ihre kostenlose Beratung und entdecken Sie, wo KI in Ihr Unternehmen passt.",
      btn: "Jetzt starten",
      copy: "© 2026 Tenfold AI Consulting. Alle Rechte vorbehalten.",
      priv: "Datenschutz"
    },
    privacy: {
      title: "Datenschutzerklärung",
      content: [
        { h: "1. Überblick", p: "Ihre Privatsphäre ist uns wichtig. Wir verarbeiten Ihre Daten gemäß den geltenden Datenschutzgesetzen (DSGVO)." },
        { h: "2. Verantwortliche Stelle", p: "Tenfold AI Consulting\nE-Mail: [IHRE E-MAIL]" },
        { h: "3. Datenerhebung", p: "Wir erheben Daten über unser Audit-Anfrageformular und technische Standarddaten über unseren Hostinganbieter." },
        { h: "4. Nutzung Ihrer Daten", p: "Daten aus Formularen werden ausschließlich zur Erbringung der gewünschten Leistung genutzt. Technische Daten dienen der Sicherheit und Stabilität." },
        { h: "5. Analyse & Cookies", p: "Wir nutzen Vercel Analytics – ein datenschutzkonformes Tool, das keine Cookies setzt und keine personenbezogenen Daten erhebt." },
        { h: "6. Hosting", p: "Die Website wird bei Vercel gehostet. Technische Protokolldaten werden automatisch nach kurzer Zeit gelöscht." },
        { h: "7. Ihre Rechte", p: "Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten. Kontaktieren Sie uns per E-Mail." }
      ]
    }
  }
};

function Curve({ lang }) {
  const t = tx[lang].curve;
  const r = useRef(null);
  const [d, setD] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setD(true); o.disconnect(); } }, { threshold: 0.25 });
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={r} style={{ width: "100%", maxWidth: 540, margin: "0 auto" }}>
      <svg viewBox="0 0 540 250" style={{ width: "100%" }} role="img" aria-label={lang === "en" ? "Exponential AI adoption curve showing current position and growth trajectory" : "Exponentielle KI-Adoptionskurve mit aktueller Position und Wachstumsverlauf"}>
        <defs>
          <linearGradient id="cfl" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#1a6fc4" stopOpacity="0.04" /><stop offset="100%" stopColor="#1a6fc4" stopOpacity="0.15" /></linearGradient>
        </defs>
        {[85, 170].map((y, i) => <line key={i} x1={30} y1={y} x2={510} y2={y} stroke="rgba(26,111,196,.08)" />)}
        <path d="M35 220 Q160 216 260 200 Q340 178 375 130 Q405 76 465 25 L465 220Z" fill="url(#cfl)" opacity={d ? 1 : 0} style={{ transition: "opacity 1s ease .3s" }} />
        <path d="M35 220 Q160 216 260 200 Q340 178 375 130 Q405 76 465 25" fill="none" stroke="#1a6fc4" strokeWidth="2.5"
          strokeDasharray="650" strokeDashoffset={d ? 0 : 650} style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)" }} />
        <g style={{ opacity: d ? 1 : 0, transition: "opacity .4s ease 1.5s" }}>
          <circle cx="275" cy="195" r="5" fill="#1a6fc4" opacity=".2"><animate attributeName="r" values="5;12;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values=".2;0;.2" dur="2.5s" repeatCount="indefinite" /></circle>
          <circle cx="275" cy="195" r="3.5" fill="#1a6fc4" />
          <line x1="281" y1="190" x2="330" y2="168" stroke="rgba(26,111,196,.35)" />
          <rect x="330" y="156" width={t.ly.length * 6.8 + 16} height="22" rx="4" fill="#fff" stroke="rgba(26,111,196,.25)" />
          <text x="338" y="171" fill="#1a6fc4" fontSize="10.5" fontFamily="'DM Sans',sans-serif" fontWeight="600">{t.ly}</text>
        </g>
        <g style={{ opacity: d ? 1 : 0, transition: "opacity .4s ease 1.8s" }}><text x="405" y="20" fill="rgba(26,111,196,.4)" fontSize="9.5" fontFamily="'DM Sans',sans-serif" fontWeight="500">{t.le}</text></g>
        <g style={{ opacity: d ? 1 : 0, transition: "opacity .4s ease 2s" }}><text x="35" y="244" fill="rgba(26,111,196,.25)" fontSize="9.5" fontFamily="'DM Sans',sans-serif">{t.ll}</text></g>
      </svg>
    </div>
  );
}

function Rev({ children, id, style }) {
  const r = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.06 }); if (r.current) o.observe(r.current); return () => o.disconnect(); }, []);
  return <section ref={r} id={id} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: "opacity .65s ease, transform .65s ease" }}>{children}</section>;
}

function SectionTitle({ title, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: sub ? 10 : 0 }}>
        <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, transparent, #1a6fc4)" }} />
        <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 700, color: "#0c2340", margin: 0, letterSpacing: "-.5px" }}>{title}</h2>
        <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #1a6fc4, transparent)" }} />
      </div>
      {sub && <p style={{ fontSize: 15, color: "#5a7a9a", margin: 0, fontWeight: 400 }}>{sub}</p>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [mob, setMob] = useState(false);
  const [sc, setSc] = useState(false);
  const [auditUrl, setAuditUrl] = useState("");
  const [auditDesc, setAuditDesc] = useState("");
  const [auditEmail, setAuditEmail] = useState("");
  const [auditSent, setAuditSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null); // 'impressum' | 'privacy' | null
  const t = tx[lang];

  useEffect(() => { const fn = () => setSc(window.scrollY > 40); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);

  const handleAuditSubmit = async () => {
    if ((!auditUrl && !auditDesc) || !auditEmail) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mykdrngv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: auditUrl, description: auditDesc, email: auditEmail }),
      });
      if (response.ok) {
        setAuditSent(true);
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMob(false); };
  const W = { maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" };

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: "#f6f9fc", color: "#3a4a5c", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ═══ NAV ═══ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 64,
        background: sc ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.85)", backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${sc ? "rgba(0,0,0,.06)" : "transparent"}`, transition: "all .3s",
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(16px,4vw,40px)",
        boxShadow: sc ? "0 2px 20px rgba(0,0,0,.04)" : "none",
      }}>
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#1a6fc4,#0d4a8a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: "#fff", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 2px 8px rgba(26,111,196,.25)" }}>10</div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#0c2340", letterSpacing: "-.3px" }}>Tenfold<span style={{ color: "#1a6fc4", fontWeight: 500, marginLeft: 1 }}>AI</span></span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[[t.nav.services, "services"], [t.nav.cases, "cases"], [t.nav.audit, "audit"], [t.nav.about, "about"]].map(([l, id]) => (
            <button key={id} onClick={() => go(id)} style={{ background: "none", border: "none", color: "#5a7a9a", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "color .2s" }}
              onMouseEnter={e => e.target.style.color = "#0c2340"} onMouseLeave={e => e.target.style.color = "#5a7a9a"}>{l}</button>
          ))}
          <button onClick={() => setLang(lang === "en" ? "de" : "en")} aria-label={lang === "en" ? "Switch to German" : "Auf Englisch wechseln"} style={{ background: "#edf2f7", border: "none", borderRadius: 6, padding: "5px 10px", color: "#1a6fc4", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{lang === "en" ? "DE" : "EN"}</button>
          <button onClick={() => go("contact")} style={{
            background: "linear-gradient(135deg,#1a6fc4,#0d4a8a)", color: "#fff", border: "none",
            borderRadius: 8, padding: "10px 22px", fontSize: 13.5, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit", transition: "all .2s", boxShadow: "0 2px 10px rgba(26,111,196,.2)",
          }} onMouseEnter={e => e.target.style.boxShadow = "0 4px 16px rgba(26,111,196,.35)"} onMouseLeave={e => e.target.style.boxShadow = "0 2px 10px rgba(26,111,196,.2)"}>{t.nav.cta}</button>
        </div>

        <div className="mobile-nav-toggle" style={{ display: "none", alignItems: "center", gap: 8 }}>
          <button onClick={() => setLang(lang === "en" ? "de" : "en")} style={{ background: "#edf2f7", border: "none", borderRadius: 6, padding: "4px 8px", color: "#1a6fc4", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{lang === "en" ? "DE" : "EN"}</button>
          <button onClick={() => setMob(!mob)} aria-label={mob ? "Close menu" : "Open menu"} aria-expanded={mob} style={{ background: "none", border: "none", color: "#0c2340", fontSize: 22, cursor: "pointer" }}>{mob ? "✕" : "☰"}</button>
        </div>
      </nav>

      {mob && <div style={{ position: "fixed", inset: "64px 0 0", zIndex: 99, background: "rgba(255,255,255,.98)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
        {[[t.nav.services, "services"], [t.nav.cases, "cases"], [t.nav.audit, "audit"], [t.nav.about, "about"]].map(([l, id]) => (
          <button key={id} onClick={() => go(id)} style={{ background: "none", border: "none", color: "#0c2340", fontSize: 20, fontFamily: "inherit", fontWeight: 600, cursor: "pointer" }}>{l}</button>
        ))}
        <button onClick={() => go("contact")} style={{ background: "linear-gradient(135deg,#1a6fc4,#0d4a8a)", color: "#fff", border: "none", borderRadius: 8, padding: "13px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{t.nav.cta}</button>
      </div>}

      {/* ═══ HERO ═══ */}
      <section style={{
        position: "relative", paddingTop: "clamp(100px,16vh,160px)", paddingBottom: "clamp(60px,10vh,100px)",
        background: "linear-gradient(165deg, #0c2340 0%, #143a64 35%, #1a6fc4 70%, #4a9fe0 100%)",
        overflow: "hidden",
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,.4) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "8%", right: "5%", width: "clamp(200px,35vw,450px)", height: "clamp(200px,35vw,450px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,.06), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,.04), transparent 65%)", pointerEvents: "none" }} />
        {/* Geometric accents */}
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 180, height: 180, border: "1px solid rgba(255,255,255,.06)", borderRadius: 16, transform: "rotate(20deg)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "18%", width: 120, height: 120, border: "1px solid rgba(255,255,255,.04)", borderRadius: 12, transform: "rotate(-10deg)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "8%", width: 80, height: 1, background: "rgba(255,255,255,.12)" }} />
        <div style={{ position: "absolute", bottom: "28%", right: "12%", width: 50, height: 1, background: "rgba(255,255,255,.08)" }} />

        <div style={{ ...W, position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 620 }}>
            <h1 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(34px,5.5vw,58px)", fontWeight: 400, lineHeight: 1.12, color: "#fff", margin: "0 0 20px" }}>
              {t.hero.h1_1}<br /><span style={{ color: "rgba(255,255,255,.7)" }}>{t.hero.h1_2}</span>
            </h1>
            <div style={{ width: 60, height: 3, background: "rgba(255,255,255,.3)", borderRadius: 2, marginBottom: 18 }} />
            <p style={{ fontSize: "clamp(14px,1.6vw,17px)", lineHeight: 1.7, color: "rgba(255,255,255,.7)", maxWidth: 480, margin: "0 0 32px" }}>{t.hero.sub}</p>
            <div className="hero-cta-group" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <button onClick={() => go("audit")} style={{
                background: "#fff", color: "#0c2340", border: "none", borderRadius: 8,
                padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer",
                fontFamily: "inherit", transition: "all .25s", boxShadow: "0 4px 16px rgba(0,0,0,.15)",
              }} onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 24px rgba(0,0,0,.2)"; }}
                onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,.15)"; }}>{t.hero.cta1}</button>
              <button onClick={() => go("services")} style={{
                background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.3)",
                borderRadius: 8, padding: "14px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit", transition: "all .25s", display: "flex", alignItems: "center", gap: 6,
              }} onMouseEnter={e => e.target.style.borderColor = "rgba(255,255,255,.6)"} onMouseLeave={e => e.target.style.borderColor = "rgba(255,255,255,.3)"}>{t.hero.cta2} <span style={{ fontSize: 16 }}>›</span></button>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" style={{ display: "block", width: "100%" }}>
            <path d="M0 40 C360 0 720 80 1080 40 C1260 20 1380 30 1440 40 L1440 80 L0 80Z" fill="#f6f9fc" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <Rev id="services" style={{ padding: "80px 0 60px" }}>
        <div style={W}>
          <SectionTitle title={t.services.h2} sub={t.services.sub} />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 20 }}>
            {t.services.items.map((s, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 14, padding: "32px 24px", textAlign: "center",
                border: "1px solid rgba(0,0,0,.04)", transition: "all .3s",
                boxShadow: "0 2px 12px rgba(0,0,0,.03)",
              }} onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,111,196,.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.03)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #e8f0fb, #d4e4f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 18px", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(26,111,196,.1)" }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0c2340", margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#6b8299", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ═══ STATS BAR ═══ */}
      <Rev style={{ padding: "50px 0" }}>
        <div style={W}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 20 }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "24px 16px", background: "#fff", borderRadius: 12, border: "1px solid rgba(0,0,0,.04)", boxShadow: "0 2px 8px rgba(0,0,0,.02)" }}>
                <div style={{ fontSize: 38, fontWeight: 800, color: "#1a6fc4", marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "#6b8299", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ═══ WHY US ═══ */}
      <Rev id="about" style={{ padding: "60px 0 70px" }}>
        <div style={W}>
          <SectionTitle title={t.why.h2} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 24 }}>
            {t.why.items.map((w, i) => (
              <div key={i} style={{ textAlign: "center", padding: "20px 20px 28px" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #dbe9f8, #c5d9f0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 16px", border: "4px solid #fff", boxShadow: "0 4px 16px rgba(26,111,196,.1)" }}>{w.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0c2340", margin: "0 0 8px" }}>{w.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#6b8299", margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ═══ 24H AUDIT ═══ */}
      <Rev id="audit" style={{ padding: "70px 0" }}>
        <div style={W}>
          <div style={{
            background: "linear-gradient(135deg, #0c2340, #1a5090, #2a7dc8)",
            borderRadius: 20, padding: "clamp(32px,5vw,56px)", position: "relative", overflow: "hidden",
            boxShadow: "0 12px 48px rgba(12,35,64,.2)",
          }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,.5) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div style={{ position: "absolute", top: -60, right: -60, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,.06), transparent 70%)" }} />

            <div className="audit-layout" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 40, alignItems: "center" }}>
              <div>
                <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(24px,3.5vw,34px)", fontWeight: 400, color: "#fff", margin: "0 0 14px", lineHeight: 1.2 }}>{t.audit.h2}</h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "rgba(255,255,255,.65)", margin: "0 0 20px" }}>{t.audit.sub}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  {t.audit.trust.map((tr, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,.5)", fontWeight: 500 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" /><path d="M4.5 7 L6.2 8.7 L9.5 5.3" stroke="#4da2ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {tr}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {auditSent ? (
                  <div style={{ padding: "24px", borderRadius: 12, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", color: "#fff", fontSize: 15, fontWeight: 500, textAlign: "center" }}>{t.audit.success}</div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      [auditUrl, setAuditUrl, t.audit.placeholder_url],
                      [auditEmail, setAuditEmail, t.audit.placeholder_email],
                    ].map(([val, set, ph], i) => (
                      <input key={i} value={val} onChange={e => set(e.target.value)} placeholder={ph} style={{
                        background: "rgba(255,255,255,.08)", border: "1.5px solid rgba(255,255,255,.12)", borderRadius: 10,
                        padding: "14px 16px", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none", transition: "border-color .2s",
                      }} onFocus={e => e.target.style.borderColor = "rgba(255,255,255,.35)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,.12)"} />
                    ))}
                    <textarea value={auditDesc} onChange={e => setAuditDesc(e.target.value)} placeholder={t.audit.placeholder_desc} rows={3} style={{
                      background: "rgba(255,255,255,.08)", border: "1.5px solid rgba(255,255,255,.12)", borderRadius: 10,
                      padding: "14px 16px", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none", resize: "vertical", transition: "border-color .2s",
                    }} onFocus={e => e.target.style.borderColor = "rgba(255,255,255,.35)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,.12)"} />
                    <button onClick={handleAuditSubmit} disabled={isSubmitting} style={{
                      background: isSubmitting ? "#e0e7ff" : "#fff", color: "#0c2340", border: "none", borderRadius: 10, padding: "14px 24px",
                      fontSize: 14.5, fontWeight: 700, cursor: isSubmitting ? "not-allowed" : "pointer", fontFamily: "inherit", transition: "all .25s",
                      boxShadow: "0 4px 16px rgba(0,0,0,.15)", opacity: isSubmitting ? 0.8 : 1,
                    }} onMouseEnter={e => { if (!isSubmitting) { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 24px rgba(0,0,0,.2)"; } }}
                      onMouseLeave={e => { if (!isSubmitting) { e.target.style.transform = "none"; e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,.15)"; } }}>{isSubmitting ? "..." : t.audit.btn} →</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Rev>

      {/* ═══ CASES ═══ */}
      <Rev id="cases" style={{ padding: "70px 0" }}>
        <div style={W}>
          <SectionTitle title={t.cases.h2} sub={t.cases.sub} />
          <div style={{ display: "grid", gap: 24 }}>
            {t.cases.items.map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,.04)", boxShadow: "0 2px 12px rgba(0,0,0,.03)" }}>
                <div style={{ padding: "16px 28px", borderBottom: "1px solid rgba(0,0,0,.04)", background: "linear-gradient(135deg, #f0f5fb, #e8eef6)", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a6fc4" }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#0c2340", letterSpacing: ".3px" }}>{c.ind}</span>
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#5a7a9a", margin: "0 0 12px" }}>{c.challenge}</p>
                  <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#5a7a9a", margin: "0 0 24px" }}>{c.approach}</p>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", color: "#1a6fc4", marginBottom: 10 }}>{t.cases.resLabel.toUpperCase()}</p>
                  <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px,1fr))", gap: 8, marginBottom: 22 }}>
                    {c.results.map((r, j) => (
                      <div key={j} style={{ padding: "10px 14px", borderRadius: 8, background: "#f0f6fc", border: "1px solid #dde8f4", fontSize: 13, color: "#0c2340", fontWeight: 600, display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ color: "#1a6fc4", fontSize: 14 }}>↗</span>{r}
                      </div>
                    ))}
                  </div>
                  <div style={{ paddingLeft: 16, borderLeft: "3px solid #dde8f4", fontStyle: "italic", fontSize: 14.5, color: "#7a94ad", lineHeight: 1.6 }}>"{c.quote}"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Rev>

      {/* ═══ CURVE ═══ */}
      <Rev id="curve" style={{ padding: "60px 0 80px" }}>
        <div style={W}>
          <div style={{ textAlign: "center" }}>
            <SectionTitle title={t.curve.h2} sub={t.curve.sub} />
            <Curve lang={lang} />
            <p style={{ fontSize: 16, fontWeight: 700, color: "#0c2340", marginTop: 28 }}>{t.curve.p}</p>
          </div>
        </div>
      </Rev>

      {/* ═══ FINAL CTA ═══ */}
      <section id="contact" style={{
        padding: "80px 0 60px", position: "relative",
        background: "linear-gradient(165deg, #0c2340 0%, #143a64 40%, #1a6fc4 100%)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,.4) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: -1, left: 0, right: 0, transform: "scaleY(-1)" }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ display: "block", width: "100%" }}>
            <path d="M0 30 C360 0 720 60 1080 30 C1260 15 1380 22 1440 30 L1440 60 L0 60Z" fill="#f6f9fc" />
          </svg>
        </div>
        <div style={{ ...W, position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 400, color: "#fff", margin: "0 0 12px" }}>{t.footer.h2}</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>{t.footer.sub}</p>
          <button onClick={() => window.open("https://calendly.com/nilshertzner/30min", "_blank")} style={{
            background: "#fff", color: "#0c2340", border: "none", borderRadius: 8, padding: "15px 36px",
            fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "all .25s",
            boxShadow: "0 4px 20px rgba(0,0,0,.15)",
          }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,.2)"; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)"; }}>{t.footer.btn} →</button>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding: "24px 0", background: "#0a1c32" }}>
        <div style={{ ...W, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <span onClick={() => setModal("privacy")} style={{ fontSize: 12, color: "rgba(255,255,255,.3)", cursor: "pointer", transition: "color .2s" }} onMouseEnter={e => e.target.style.color = "rgba(255,255,255,.6)"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.3)"}>{t.footer.priv}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.15)" }}>|</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>{t.footer.copy}</span>
        </div>
      </footer>

      {/* ═══ LEGAL MODAL ═══ */}
      {modal && (
        <div onClick={() => setModal(null)} style={{
          position: "fixed", inset: 0, zIndex: 200, background: "rgba(12,35,64,.85)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "#fff", borderRadius: 16, maxWidth: 680, width: "100%", maxHeight: "85vh",
            overflow: "auto", padding: "36px 32px", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,.25)",
          }}>
            <button onClick={() => setModal(null)} aria-label="Close" style={{
              position: "sticky", top: 0, float: "right", background: "#f0f4f8", border: "none",
              borderRadius: 8, width: 32, height: 32, fontSize: 16, cursor: "pointer", color: "#5a7a9a",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>✕</button>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0c2340", margin: "0 0 24px", fontFamily: "'DM Serif Display',Georgia,serif" }}>
              {t[modal]?.title}
            </h2>
            {t[modal]?.content.map((s, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0c2340", margin: "0 0 6px" }}>{s.h}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#5a7a9a", margin: 0, whiteSpace: "pre-line" }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      )}


    </div >
  );
}
