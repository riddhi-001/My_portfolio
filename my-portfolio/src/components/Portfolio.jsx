import { useState } from 'react'

const projects = [
  { id: 1, title: 'Brand Identity — TechCo', category: 'Graphic Design', gradient: 'linear-gradient(135deg, #7C3AED, #06B6D4)' },
  { id: 2, title: 'E-commerce Website', category: 'Web Development', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)' },
  { id: 3, title: 'Social Media Campaign', category: 'Digital Marketing', gradient: 'linear-gradient(135deg, #10B981, #06B6D4)' },
  { id: 4, title: 'Mobile App UI Design', category: 'UI/UX Design', gradient: 'linear-gradient(135deg, #6366F1, #EC4899)' },
  { id: 5, title: 'Restaurant Branding Kit', category: 'Graphic Design', gradient: 'linear-gradient(135deg, #F59E0B, #7C3AED)' },
  { id: 6, title: 'WordPress Blog', category: 'Web Development', gradient: 'linear-gradient(135deg, #EF4444, #F59E0B)' },
]

const categories = ['All', 'Graphic Design', 'Web Development', 'Digital Marketing', 'UI/UX Design']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Projects That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="section-desc">
            A selection of our best work across design, development, and marketing.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-thumb" style={{ background: project.gradient }}>
                <div className="portfolio-overlay">
                  <button className="view-btn">View Project</button>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-cat">{project.category}</span>
                <h4 className="portfolio-title">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
