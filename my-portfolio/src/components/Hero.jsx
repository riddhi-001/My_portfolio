import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">✦ Digital Agency</span>
          <h1 className="hero-title">
            We Craft Digital<br />
            <span className="gradient-text">Experiences</span> That<br />
            Drive Growth
          </h1>
          <p className="hero-desc">
            From branding to development, we deliver end-to-end digital solutions
            that elevate your business and captivate your audience.
          </p>
          <div className="hero-btns">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#portfolio" className="btn-outline">View Portfolio</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>200+</strong>
              <span>Projects Done</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>50+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="float-card card-1">
              <span>🎨</span>
              <p>Graphic Design</p>
            </div>
            <div className="hero-img-wrap">
              <img src={heroImg} alt="Agency hero" className="hero-img" />
            </div>
            <div className="float-card card-2">
              <span>📈</span>
              <p>Digital Marketing</p>
            </div>
            <div className="float-card card-3">
              <span>💻</span>
              <p>Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
