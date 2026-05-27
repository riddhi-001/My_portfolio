export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="nav-logo">
            <span className="logo-icon">✦</span>
            CreativeMinds
          </a>
          <p>
            We help businesses grow with creative digital solutions — from design
            to development and marketing.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a href="#services">Digital Marketing</a>
            <a href="#services">Website Development</a>
            <a href="#services">Graphic Designing</a>
            <a href="#services">UI/UX Designing</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 CreativeMinds Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}
