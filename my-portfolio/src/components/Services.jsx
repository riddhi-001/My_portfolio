const services = [
  {
    icon: '📈',
    title: 'Digital Marketing',
    color: '#7C3AED',
    items: [
      'Social Media Marketing',
      'Facebook Marketing',
      'Local SEO',
      'Content Marketing',
      'Google Ads',
      'Meta Ads',
    ],
  },
  {
    icon: '💻',
    title: 'Website Development',
    color: '#06B6D4',
    items: [
      'WordPress Development',
      'Shopify Development',
      'Ecommerce Development',
    ],
  },
  {
    icon: '🎨',
    title: 'Graphic Designing',
    color: '#F59E0B',
    items: [
      'Logo Design',
      'Branding',
      'Social Media Post Design',
      'Reels Design',
      'Poster Design',
      'Flyer Design',
      'Banner Design',
      'Standee Design',
      'Packaging Design',
      'Brochure Design',
      'Business Card Design',
      'Catalogue Design',
      'Video Editing',
    ],
  },
  {
    icon: '✏️',
    title: 'UI/UX Designing',
    color: '#10B981',
    items: ['Website Design', 'Mobile App Design'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="section-desc">
            We offer a comprehensive suite of digital services tailored to your business goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div
              key={service.title}
              className="service-card"
              style={{ '--accent-color': service.color }}
            >
              <div
                className="service-icon-wrap"
                style={{ background: `${service.color}18` }}
              >
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map(item => (
                  <li key={item}>
                    <span className="check" style={{ color: service.color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta" style={{ color: service.color }}>
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
