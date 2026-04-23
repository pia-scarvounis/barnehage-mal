import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import type { Translation, Lang } from '../../types'
import { barnehage } from '../../config/barnehage'

interface Props {
  t: Translation
  lang: Lang
  toggleLang: () => void
  children: React.ReactNode
}

export default function Layout({ t, lang, toggleLang, children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Shorter nav — åpningstider moved under For foreldre
  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/om-oss' },
    { label: t.nav.departments, href: '/avdelinger', hasDropdown: 'avdelinger' },
    { label: t.nav.forParents, href: '/for-foreldre', hasDropdown: 'foreldre' },
    { label: t.nav.pedagogy, href: '/pedagogikk', hasDropdown: 'pedagogikk' },
    { label: t.nav.gallery, href: '/galleri' },
    { label: t.nav.contact, href: '/kontakt' },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#FFFBF5' }}>

      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white', borderBottom: '1.5px solid #F5EDE3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }} ref={dropdownRef}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F07C3E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '13px', fontFamily: "'Nunito', sans-serif" }}>
              {barnehage.kortNavn.slice(0, 2)}
            </div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', fontFamily: "'Nunito', sans-serif" }}>
              {barnehage.navn}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => {
                  if (link.hasDropdown) {
                    setDropdown(dropdown === link.hasDropdown ? null : link.hasDropdown)
                  } else {
                    window.location.href = link.href
                    setDropdown(null)
                  }
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '3px',
                  padding: '7px 11px', borderRadius: '10px', border: 'none',
                  background: dropdown === link.hasDropdown ? '#FFF3D6' : 'transparent',
                  color: dropdown === link.hasDropdown ? '#B8610A' : '#555',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.15s',
                }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} style={{ transform: dropdown === link.hasDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }} />}
              </button>
            ))}
          </nav>

          {/* Lang toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden-mobile">
            <button
              onClick={toggleLang}
              style={{
                display: 'flex', alignItems: 'center',
                backgroundColor: '#F5F5F5', borderRadius: '40px',
                padding: '3px', border: 'none', cursor: 'pointer',
                gap: '0',
              }}
            >
              <span style={{
                padding: '5px 14px', borderRadius: '40px', fontSize: '12px', fontWeight: 700,
                backgroundColor: lang === 'no' ? '#F07C3E' : 'transparent',
                color: lang === 'no' ? '#fff' : '#999',
                transition: 'all 0.2s',
              }}>NO</span>
              <span style={{
                padding: '5px 14px', borderRadius: '40px', fontSize: '12px', fontWeight: 700,
                backgroundColor: lang === 'en' ? '#F07C3E' : 'transparent',
                color: lang === 'en' ? '#fff' : '#999',
                transition: 'all 0.2s',
              }}>EN</span>
            </button>
          </div>

          {/* Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="show-mobile">
            <button onClick={toggleLang} style={{
              display: 'flex', alignItems: 'center',
              backgroundColor: '#F5F5F5', borderRadius: '40px',
              padding: '3px', border: 'none', cursor: 'pointer',
            }}>
              <span style={{ padding: '4px 10px', borderRadius: '40px', fontSize: '11px', fontWeight: 700, backgroundColor: lang === 'no' ? '#F07C3E' : 'transparent', color: lang === 'no' ? '#fff' : '#999' }}>NO</span>
              <span style={{ padding: '4px 10px', borderRadius: '40px', fontSize: '11px', fontWeight: 700, backgroundColor: lang === 'en' ? '#F07C3E' : 'transparent', color: lang === 'en' ? '#fff' : '#999' }}>EN</span>
            </button>
            <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333', padding: '4px' }}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* For foreldre dropdown — includes åpningstider */}
        {dropdown === 'foreldre' && (
          <div style={{ position: 'absolute', left: 0, right: 0, backgroundColor: 'white', borderTop: '1.5px solid #F5EDE3', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', zIndex: 50 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#aaa', marginBottom: '12px' }}>{t.nav.forParentsGroups.practical}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                  {[
                    { label: t.nav.forParentsLinks.settling, href: '/for-foreldre/tilvenning' },
                    { label: t.nav.forParentsLinks.hours, href: '/for-foreldre/aapningstider' },
                    { label: t.nav.forParentsLinks.holiday, href: '/for-foreldre/ferie' },
                    { label: t.nav.forParentsLinks.sick, href: '/for-foreldre/sykdom' },
                    { label: t.nav.forParentsLinks.clothes, href: '/for-foreldre/klaer' },
                    { label: t.nav.forParentsLinks.food, href: '/for-foreldre/mat' },
                    { label: t.nav.forParentsLinks.pricing, href: '/for-foreldre/betaling' },
                  ].map(item => (
                    <Link key={item.href} to={item.href} onClick={() => setDropdown(null)}
                      style={{ padding: '9px 12px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, color: '#444', textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FFF8EE')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#aaa', marginBottom: '12px' }}>{t.nav.forParentsGroups.communication}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                  {[
                    { label: t.nav.forParentsLinks.platform, href: '/for-foreldre/plattform' },
                    { label: t.nav.forParentsLinks.survey, href: '/for-foreldre/undersokelse' },
                    { label: t.nav.forParentsLinks.suFau, href: '/for-foreldre/su-fau' },
                    { label: t.nav.forParentsLinks.news, href: '/for-foreldre/nyheter' },
                    { label: t.nav.forParentsLinks.celebrations, href: '/for-foreldre/merkedager' },
                    { label: t.nav.forParentsLinks.statutes, href: '/for-foreldre/vedtekter' },
                  ].map(item => (
                    <Link key={item.href} to={item.href} onClick={() => setDropdown(null)}
                      style={{ padding: '9px 12px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, color: '#444', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EEF4FF')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pedagogikk dropdown */}
        {dropdown === 'pedagogikk' && (
          <div style={{ position: 'absolute', left: 0, right: 0, backgroundColor: 'white', borderTop: '1.5px solid #F5EDE3', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', zIndex: 50 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 32px', display: 'flex', gap: '4px' }}>
              {[
                { label: t.nav.pedagogyLinks.framework, href: '/pedagogikk/rammeplan' },
                { label: t.nav.pedagogyLinks.focus, href: '/pedagogikk/satsningsomrader' },
                { label: t.nav.pedagogyLinks.values, href: '/pedagogikk/verdier' },
                { label: t.nav.pedagogyLinks.schedule, href: '/pedagogikk/dagsrytme' },
              ].map(item => (
                <Link key={item.href} to={item.href} onClick={() => setDropdown(null)}
                  style={{ flex: 1, padding: '10px 14px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, color: '#444', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FFF8EE')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Avdelinger dropdown */}
        {dropdown === 'avdelinger' && (
          <div style={{ position: 'absolute', left: 0, right: 0, backgroundColor: 'white', borderTop: '1.5px solid #F5EDE3', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', zIndex: 50 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 32px', display: 'flex', gap: '4px' }}>
              {barnehage.avdelinger.map(avd => (
                <Link key={avd.id} to={`/avdelinger/${avd.id}`} onClick={() => setDropdown(null)}
                  style={{ flex: 1, padding: '10px 14px', borderRadius: '10px', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FFF8EE')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#333', display: 'block' }}>{avd.navn}</span>
                  <span style={{ fontSize: '12px', color: '#999' }}>{avd.alder} {t.departments.ageUnit}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: 'white', borderTop: '1.5px solid #F5EDE3', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}
                style={{ fontSize: '14px', fontWeight: 500, color: '#444', padding: '10px 12px', borderRadius: '10px', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
            <a href="https://www.oslo.kommune.no/barnehage/" target="_blank" rel="noreferrer"
              style={{ marginTop: '8px', backgroundColor: '#F07C3E', color: 'white', padding: '12px 20px', borderRadius: '40px', fontSize: '14px', fontWeight: 700, textAlign: 'center', textDecoration: 'none' }}>
              {t.nav.apply}
            </a>
          </div>
        )}
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      {/* FOOTER */}
      <footer>
        {/* Playful wavy top */}
        <div style={{ lineHeight: 0, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: '100px', display: 'block' }}>
            <path d="M0,60 C180,20 360,90 540,50 C720,10 900,80 1080,45 C1260,10 1350,70 1440,50 L1440,100 L0,100 Z" fill="#FFF3E0" />
          </svg>
        </div>

        <div style={{ backgroundColor: '#FFF3E0', padding: '0 40px 60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* Top row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F07C3E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '13px', fontFamily: "'Nunito', sans-serif" }}>
                    {barnehage.kortNavn.slice(0, 2)}
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#4A3728', fontFamily: "'Nunito', sans-serif" }}>{barnehage.navn}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#8B6F5E', lineHeight: 1.8, maxWidth: '240px', fontWeight: 300 }}>{t.footer.tagline}</p>
                {/* Small decorative elements */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
                  {['🌸', '🌿', '⭐'].map(e => (
                    <span key={e} style={{ fontSize: '22px', opacity: 0.7 }}>{e}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C4956A', marginBottom: '16px' }}>{t.footer.departments}</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {barnehage.avdelinger.map(avd => (
                    <li key={avd.id}>
                      <Link to={`/avdelinger/${avd.id}`} style={{ color: '#8B6F5E', textDecoration: 'none', fontSize: '13px', fontWeight: 400 }}>
                        {avd.navn} ({avd.alder} {t.departments.ageUnit})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C4956A', marginBottom: '16px' }}>{t.footer.info}</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><a href="https://www.oslo.kommune.no/barnehage/" target="_blank" rel="noreferrer" style={{ color: '#8B6F5E', textDecoration: 'none', fontSize: '13px' }}>{t.footer.links.apply}</a></li>
                  <li><a href="https://www.oslo.kommune.no/barnehage/pris-og-betaling" target="_blank" rel="noreferrer" style={{ color: '#8B6F5E', textDecoration: 'none', fontSize: '13px' }}>{t.footer.links.pricing}</a></li>
                  <li><Link to="/for-foreldre/plattform" style={{ color: '#8B6F5E', textDecoration: 'none', fontSize: '13px' }}>{t.footer.links.platform}</Link></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C4956A', marginBottom: '16px' }}>{t.footer.contactHeading}</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><a href={`tel:${barnehage.telefon}`} style={{ color: '#8B6F5E', textDecoration: 'none', fontSize: '13px' }}>{barnehage.telefon}</a></li>
                  <li><a href={`mailto:${barnehage.epost}`} style={{ color: '#8B6F5E', textDecoration: 'none', fontSize: '13px' }}>{barnehage.epost}</a></li>
                  {barnehage.adresser.map(adr => (
                    <li key={adr.navn}><span style={{ color: '#8B6F5E', fontSize: '13px' }}>{adr.gate}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div style={{ borderTop: '1.5px solid #E8C9A0', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: '#B8956A' }}>© {new Date().getFullYear()} {barnehage.navn} · {t.footer.copyright}</span>
              <span style={{ fontSize: '12px', color: '#B8956A' }}>{t.contact.orgNo} {barnehage.orgNr}</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1100px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 1101px) { .show-mobile { display: none !important; } }
      `}</style>
    </div>
  )
}
