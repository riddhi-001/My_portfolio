import { useState, useEffect } from 'react'

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

const services = [
  {
    title: 'Digital Marketing',
    icon: '📈',
    items: ['Social Media Marketing', 'Facebook Marketing', 'Local SEO', 'Content Marketing', 'Google Ads', 'Meta Ads'],
  },
  {
    title: 'Website Development',
    icon: '💻',
    items: ['WordPress Development', 'Shopify Development', 'Ecommerce Development'],
  },
  {
    title: 'Graphic Designing',
    icon: '🎨',
    items: ['Logo Design', 'Branding', 'Social Media Post Design', 'Reels Design', 'Poster Design', 'Flyer Design', 'Banner Design', 'Standee Design', 'Packaging Design', 'Brochure Design', 'Business Card Design', 'Catalogue Design', 'Video Editing'],
  },
  {
    title: 'UI/UX Designing',
    icon: '✏️',
    items: ['Website Design', 'Mobile App Design'],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeAll = () => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-icon">✦</span>
          CreativeMinds
        </a>

        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>

          <li
            className="nav-item"
            onMouseEnter={() => setActiveDropdown('company')}
          >
            <span className="nav-link">
              Company <span className="chevron">▾</span>
            </span>
            {activeDropdown === 'company' && (
              <div className="dropdown">
                {companyLinks.map(link => (
                  <a key={link.label} href={link.href} className="dropdown-item" onClick={closeAll}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => setActiveDropdown('services')}
          >
            <span className="nav-link">
              Services <span className="chevron">▾</span>
            </span>
          </li>

          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#contact" className="nav-link contact-btn">Contact Us</a></li>
        </ul>

        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {activeDropdown === 'services' && (
        <div className="mega-menu">
          {services.map(service => (
            <div key={service.title} className="mega-col">
              <h4 className="mega-heading">
                <span>{service.icon}</span> {service.title}
              </h4>
              <ul>
                {service.items.map(item => (
                  <li key={item}>
                    <a href="#services" className="mega-link" onClick={closeAll}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-link" onClick={closeAll}>Home</a>

          <div className="mobile-section">
            <p className="mobile-category">Company</p>
            {companyLinks.map(l => (
              <a key={l.label} href={l.href} className="mobile-sub-link" onClick={closeAll}>{l.label}</a>
            ))}
          </div>

          <div className="mobile-section">
            <p className="mobile-category">Services</p>
            {services.map(s => (
              <div key={s.title}>
                <p className="mobile-service-title">{s.icon} {s.title}</p>
                {s.items.map(item => (
                  <a key={item} href="#services" className="mobile-sub-link" onClick={closeAll}>{item}</a>
                ))}
              </div>
            ))}
          </div>

          <a href="#portfolio" className="mobile-link" onClick={closeAll}>Portfolio</a>
          <a href="#contact" className="mobile-cta" onClick={closeAll}>Contact Us</a>
        </div>
      )}
    </nav>
  )
}
