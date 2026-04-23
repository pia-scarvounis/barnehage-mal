import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, MapPin, Utensils, Globe, TreePine, Palette, Heart, ChevronLeft, ChevronRight, Phone, Mail, Users, CalendarDays, Banknote } from 'lucide-react'
import type { Translation } from '../types'
import { barnehage } from '../config/barnehage'

import img1 from '../assets/barnehage1.jpg'
import img2 from '../assets/barnehage2.jpg'
import img3 from '../assets/barnehage3.jpg'
import img4 from '../assets/barnehage4.jpg'
import img5 from '../assets/barnehage5.jpg'
import img6 from '../assets/barnehage6.jpg'
import img7 from '../assets/barnehage7.jpg'
import img8 from '../assets/barnehage8.jpg'
import img9 from '../assets/barnehage9.jpg'

interface Props { t: Translation }

const chipIcons = [Globe, TreePine, Palette, Heart]

export default function HomePage({ t }: Props) {
  const totalBarn = barnehage.avdelinger.reduce((a, b) => a + b.antallBarn, 0)
  const valuesImages = [img6, img5, img7, img1]
  const galleryRef = useRef<HTMLDivElement>(null)
  const scrollGallery = (dir: 'left' | 'right') => {
    galleryRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <div className="container" style={{ paddingTop: '64px' }}>
          <div className="hero-grid">

            {/* Text */}
            <div>
              <h1 className="hero-h1">
                {t.hero.title}<br />
                <span style={{ color: '#F07C3E' }}>{barnehage.navn}</span>
              </h1>
              <p className="hero-sub">{t.hero.subtitle}</p>
              <div className="btn-row">
                <a href="https://www.oslo.kommune.no/barnehage/" target="_blank" rel="noreferrer" className="btn-primary">
                  {t.hero.applyBtn} <ArrowRight size={16} />
                </a>
                <Link to="/om-oss" className="btn-secondary">{t.hero.learnMore}</Link>
              </div>
            </div>

            {/* Photo collage — hidden on small screens */}
            <div className="hero-collage">
              <div style={{ position: 'absolute', top: 0, left: '5%', width: '65%', height: '320px', borderRadius: '200px 200px 200px 40px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <img src={img7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', top: '20px', right: 0, width: '33%', height: '190px', borderRadius: '100px 100px 40px 100px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
                <img src={img5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '30px', left: 0, width: '38%', height: '200px', borderRadius: '100px 40px 100px 100px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
                <img src={img2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '10px', right: '5%', width: '52%', height: '200px', borderRadius: '40px 100px 100px 100px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
                <img src={img9} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>

        <div style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP (marquee) ── */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1.5px solid #F5EDE3', overflow: 'hidden', paddingTop: '12px', paddingBottom: '12px' }}>
        <div className="marquee-track">
          {[0, 1].map(copy => (
            <div key={copy} className="marquee-row" aria-hidden={copy === 1}>
              <div className="info-item"><Clock size={14} style={{ color: '#F07C3E' }} /><span>{t.parents.hours.openText} {barnehage.aapningstider.alle}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><MapPin size={14} style={{ color: '#F07C3E' }} /><span>{barnehage.adresser.map(a => a.gate).join(' · ')}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><Utensils size={14} style={{ color: '#F07C3E' }} /><span>{t.parents.food.hotDays}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><Users size={14} style={{ color: '#F07C3E' }} /><span>{totalBarn} {t.hero.stats.children.toLowerCase()}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><CalendarDays size={14} style={{ color: '#F07C3E' }} /><span>{t.home.since} {barnehage.etablert}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><TreePine size={14} style={{ color: '#F07C3E' }} /><span>{t.departments.outings}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><Banknote size={14} style={{ color: '#F07C3E' }} /><span>{t.parents.food.cost}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><Phone size={14} style={{ color: '#F07C3E' }} /><span>{barnehage.telefon}</span></div>
              <span className="marquee-dot" />
              <div className="info-item"><Mail size={14} style={{ color: '#F07C3E' }} /><span>{barnehage.epost}</span></div>
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* ── OM OSS ── */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="two-col-grid">
            <div className="img-grid-2x2">
              <div style={{ borderRadius: '24px', overflow: 'hidden', gridRow: 'span 2', borderTopLeftRadius: '64px' }}>
                <img src={img6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '24px', overflow: 'hidden', borderTopRightRadius: '64px' }}>
                <img src={img4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '24px', overflow: 'hidden', borderBottomRightRadius: '64px' }}>
                <img src={img8} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <h2 className="section-h2">{t.about.title}</h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>{t.about.body1}</p>
              <p className="body-text">{t.about.body2}</p>
              <div className="chips-grid">
                {t.home.aboutChips.map((chip, i) => {
                  const Icon = chipIcons[i]
                  return (
                    <div key={chip} className="chip">
                      <Icon size={15} style={{ color: '#F07C3E', flexShrink: 0 }} />
                      <span>{chip}</span>
                    </div>
                  )
                })}
              </div>
              <Link to="/om-oss" className="link-arrow">
                {t.hero.learnMore} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVDELINGER ── */}
      <section style={{ backgroundColor: '#FFFBF5', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-h2 text-center" style={{ marginBottom: '12px' }}>{t.home.departmentsTitle}</h2>
          <p className="body-text text-center" style={{ maxWidth: '520px', margin: '0 auto 48px' }}>{t.departments.lead}</p>
          <div className="dept-grid">
            {barnehage.avdelinger.map((avd, idx) => (
              <div key={avd.id} className="card">
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={idx === 0 ? img9 : img3} alt={avd.navn} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="age-badge">{avd.alder} {t.departments.ageUnit}</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 className="card-h3">{avd.navn}</h3>
                  <p className="body-text" style={{ marginBottom: '16px' }}>{avd.beskrivelse}</p>
                  <div className="chips-row">
                    {[`${avd.antallBarn} ${t.departments.children}`, `${avd.antallAnsatte} ${t.departments.staff}`, t.departments.outings].map(chip => (
                      <span key={chip} className="tag-chip">{chip}</span>
                    ))}
                  </div>
                  <Link to={`/avdelinger/${avd.id}`} className="link-arrow" style={{ marginTop: '16px' }}>
                    {t.departments.readMore} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERI STRIPE ── */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: '32px' }}>
          <h2 className="section-h2">{t.gallery.title}</h2>
        </div>
        <div className="gallery-wrapper">
          <button className="gallery-arrow gallery-arrow-left" onClick={() => scrollGallery('left')} aria-label="Forrige">
            <ChevronLeft size={22} />
          </button>
          <div className="gallery-strip" ref={galleryRef}>
            {[img5, img4, img6, img8, img2, img3].map((src, i) => (
              <div key={i} className="gallery-item" style={{ width: i % 3 === 0 ? '300px' : '220px' }}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <button className="gallery-arrow gallery-arrow-right" onClick={() => scrollGallery('right')} aria-label="Neste">
            <ChevronRight size={22} />
          </button>
        </div>
      </section>

      {/* ── VERDIER 4 kort ── */}
      <section style={{ backgroundColor: '#FFFBF5', padding: '80px 0' }}>
        <div className="container">
          <div className="values-grid">
            {t.home.valuesCards.map((card, i) => (
              <div key={card.title} className="card">
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={valuesImages[i]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '18px' }}>
                  <h3 className="card-h3" style={{ fontSize: '15px', marginBottom: '6px' }}>{card.title}</h3>
                  <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.6, fontWeight: 300 }}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-blob cta-blob-1" />
        <div className="cta-blob cta-blob-2" />
        <div style={{ maxWidth: '660px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 24px' }}>
          <h2 className="cta-h2">{t.home.ctaTitle}</h2>
          <p className="cta-body">{t.home.ctaBody}</p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <a href="https://www.oslo.kommune.no/barnehage/" target="_blank" rel="noreferrer" className="btn-cta-primary">
              {t.hero.applyBtn} <ArrowRight size={16} />
            </a>
            <Link to="/kontakt" className="btn-cta-secondary">{t.nav.contact}</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Base ── */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-h2 { font-family: 'Nunito', sans-serif; font-size: clamp(1.7rem, 3.5vw, 2.6rem); font-weight: 900; color: #1a1a1a; margin-bottom: 20px; line-height: 1.1; }
        .text-center { text-align: center; }
        .body-text { font-size: 15px; color: #666; line-height: 1.8; font-weight: 300; }
        .card-h3 { font-family: 'Nunito', sans-serif; font-size: 1.15rem; font-weight: 900; color: #1a1a1a; margin-bottom: 8px; }
        .link-arrow { display: inline-flex; align-items: center; gap: 5px; color: #F07C3E; font-weight: 700; font-size: 14px; text-decoration: none; margin-top: 20px; }
        .btn-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #F07C3E; color: #fff; padding: 14px 28px; border-radius: 50px; font-weight: 700; font-size: 15px; text-decoration: none; box-shadow: 0 4px 20px rgba(240,124,62,0.3); }
        .btn-secondary { display: inline-flex; align-items: center; gap: 6px; background: #fff; color: #333; padding: 13px 24px; border-radius: 50px; font-weight: 600; font-size: 15px; text-decoration: none; border: 2px solid #eee; }

        /* ── Hero ── */
        .hero-section { background: #FFFBF5; overflow: hidden; position: relative; }
        .blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
        .blob-1 { top: -80px; right: -80px; width: 380px; height: 380px; background: #FFE8B0; opacity: 0.6; }
        .blob-2 { bottom: 60px; left: -60px; width: 240px; height: 240px; background: #FFD6DB; opacity: 0.5; }
        .blob-3 { top: 180px; left: 44%; width: 140px; height: 140px; background: #D4EDDA; opacity: 0.5; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; position: relative; z-index: 1; }
        .hero-h1 { font-family: 'Nunito', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; line-height: 1.05; color: #1a1a1a; margin-bottom: 20px; }
        .hero-sub { font-size: 16px; color: #666; line-height: 1.8; max-width: 420px; font-weight: 300; }
        .stats-row { display: flex; gap: 28px; margin-top: 40px; padding-top: 28px; border-top: 1.5px solid #f0e8e0; }
        .stat-num { font-family: 'Nunito', sans-serif; font-size: 2.2rem; font-weight: 900; color: #F07C3E; line-height: 1; }
        .stat-label { font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; font-weight: 600; }
        .hero-collage { position: relative; height: 500px; }

        /* ── Info strip marquee ── */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: marquee 18s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-row { display: flex; align-items: center; gap: 28px; padding-right: 28px; white-space: nowrap; }
        .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: #F07C3E; opacity: 0.4; flex-shrink: 0; }
        .info-item { display: flex; align-items: center; gap: 7px; font-size: 13px; color: #555; font-weight: 500; }

        /* ── About ── */
        .two-col-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .img-grid-2x2 { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 200px 200px; gap: 14px; }
        .chips-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 28px; }
        .chip { display: flex; align-items: center; gap: 8px; background: #FFFBF5; border-radius: 12px; padding: 10px 14px; border: 1.5px solid #F5EDE3; font-size: 13px; font-weight: 600; color: #333; }

        /* ── Departments ── */
        .dept-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .card { background: #fff; border-radius: 24px; overflow: hidden; border: 1.5px solid #F5EDE3; }
        .age-badge { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.95); border-radius: 40px; padding: 5px 14px; font-size: 12px; font-weight: 700; color: #B8610A; border: 1.5px solid #FFD580; }
        .chips-row { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag-chip { font-size: 12px; font-weight: 600; background: #FFF3D6; color: #B8610A; padding: 4px 12px; border-radius: 40px; border: 1px solid #FFD580; }

        /* ── Gallery ── */
        .gallery-wrapper { position: relative; display: flex; align-items: center; }
        .gallery-strip { display: flex; gap: 14px; padding: 0 20px 6px; overflow-x: auto; scrollbar-width: none; flex: 1; }
        .gallery-strip::-webkit-scrollbar { display: none; }
        .gallery-item { flex-shrink: 0; height: 260px; border-radius: 20px; overflow: hidden; }
        .gallery-arrow { position: absolute; z-index: 10; background: #fff; border: 1.5px solid #F5EDE3; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 12px rgba(0,0,0,0.12); color: #333; transition: background 0.18s, color 0.18s, border-color 0.18s; }
        .gallery-arrow:hover { background: #F07C3E; color: #fff; border-color: #F07C3E; }
        .gallery-arrow-left { left: 12px; }
        .gallery-arrow-right { right: 12px; }

        /* ── Values ── */
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        /* ── CTA ── */
        .cta-section { background: #F07C3E; padding: 80px 0; position: relative; overflow: hidden; }
        .cta-blob { position: absolute; border-radius: 50%; }
        .cta-blob-1 { top: -60px; right: -60px; width: 280px; height: 280px; background: rgba(255,255,255,0.1); }
        .cta-blob-2 { bottom: -80px; left: -40px; width: 220px; height: 220px; background: rgba(255,255,255,0.07); }
        .cta-h2 { font-family: 'Nunito', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
        .cta-body { font-size: 16px; color: rgba(255,255,255,0.82); margin-bottom: 32px; line-height: 1.7; font-weight: 300; }
        .btn-cta-primary { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #F07C3E; padding: 14px 32px; border-radius: 50px; font-weight: 700; font-size: 15px; text-decoration: none; }
        .btn-cta-secondary { display: inline-flex; align-items: center; gap: 6px; background: transparent; color: #fff; padding: 13px 28px; border-radius: 50px; font-weight: 600; font-size: 15px; text-decoration: none; border: 2px solid rgba(255,255,255,0.45); }

        /* ── TABLET (768px) ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero-collage { display: none; }
          .two-col-grid { grid-template-columns: 1fr; gap: 40px; }
          .img-grid-2x2 { grid-template-rows: 180px 180px; }
          .dept-grid { grid-template-columns: 1fr 1fr; }
          .values-grid { grid-template-columns: 1fr 1fr; }
          .hero-h1 { font-size: clamp(2rem, 6vw, 2.8rem); }
        }

        /* ── MOBILE (480px) ── */
        @media (max-width: 540px) {
          .container { padding: 0 16px; }
          .hero-section .container { padding-top: 48px; }
          .hero-h1 { font-size: 2rem; }
          .hero-sub { font-size: 15px; }
          .btn-primary, .btn-secondary { padding: 13px 22px; font-size: 14px; }
          .stats-row { gap: 20px; margin-top: 28px; }
          .stat-num { font-size: 1.9rem; }
          .info-strip { gap: 12px; }
          .info-item { font-size: 12px; }
          .dept-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .chips-grid { grid-template-columns: 1fr 1fr; }
          .btn-row { flex-direction: column; }
          .btn-primary, .btn-secondary, .btn-cta-primary, .btn-cta-secondary { width: 100%; justify-content: center; }
          .gallery-item { height: 200px; }
          .section-h2 { font-size: 1.6rem; }
          .img-grid-2x2 { grid-template-rows: 150px 150px; }
        }
      `}</style>
    </div>
  )
}
