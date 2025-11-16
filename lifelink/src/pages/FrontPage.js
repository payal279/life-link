import React, { useEffect } from "react";
import "../assets/css/FrontPage.css";

const FrontPage = () => {

  useEffect(() => {
  // Toggle Menu
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  const btn = document.getElementById('theme-toggle-btn');

  const toggleMenu = () => nav.classList.toggle('is-open');
  const toggleTheme = () => document.body.classList.toggle('dark-mode');

  if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
  if (btn) btn.addEventListener('click', toggleTheme);

  // Scroll animations
  const organs = document.getElementById('organs-section');
  const aboutCards = document.querySelectorAll('.about-card');

  const handleScroll = () => {
    if (organs && organs.getBoundingClientRect().top < window.innerHeight - 100) {
      organs.classList.add('show');
    }

    aboutCards.forEach((card) => {
      if (card.getBoundingClientRect().top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  // CLEANUP to prevent memory leaks
  return () => {
    window.removeEventListener('scroll', handleScroll);
    if (menuBtn) menuBtn.removeEventListener('click', toggleMenu);
    if (btn) btn.removeEventListener('click', toggleTheme);
  };
}, []);


  return (
    <>
      <header>
        <div className="nav-container">
          <a href="/" onClick={(e) => e.preventDefault()}>brand</a>

            <div className="brand-logo"></div>
            <h1>LifeLink</h1>
  
          <nav>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#organs-section">Transplant Guide</a>
            <a href="/" onClick={(e) => e.preventDefault()}>Contact</a>
          </nav>
          <div className="actions-container">
            <button id="theme-toggle-btn" title="Toggle theme"></button>
            <button className="menu-btn"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <h1 className="slogan">Connecting Donors. Creating Miracles.</h1>
          <p>Your decision to donate can light up eight different lives.<br />
            Join our mission to spread awareness and save lives today.
          </p>
          <a href="/login" className="cta">GET STARTED</a>
        </section>

        <section className="about" id="about">
          <h2>About LifeLink</h2>
          <p>
            LifeLink bridges donors and recipients through technology and compassion.
            We inspire people to become donors and spread awareness about organ donation.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <img src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png" alt="Awareness" />
              <h3>Awareness</h3>
              <p>We spread awareness through impactful campaigns and community outreach.</p>
            </div>
            <div className="about-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3313/3313884.png" alt="Innovation" />
              <h3>Innovation</h3>
              <p>We use smart systems to connect hospitals, donors, and recipients efficiently.</p>
            </div>
            <div className="about-card">
              <img src="https://cdn-icons-png.flaticon.com/512/4447/4447565.png" alt="Transparency" />
              <h3>Transparency</h3>
              <p>Ensuring every donation is handled ethically and securely.</p>
            </div>
            <div className="about-card">
              <img src="https://cdn-icons-png.flaticon.com/512/4761/4761044.png" alt="Support" />
              <h3>Support</h3>
              <p>We guide donors and families throughout the process with care.</p>
            </div>
            <div className="about-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3447/3447884.png" alt="Community" />
              <h3>Community</h3>
              <p>Join thousands of heroes making a difference together.</p>
            </div>
      

          </div>
        </section>

        <section className="organs" id="organs-section">
          <div className="organ"><img src="https://i.pinimg.com/736x/ee/b9/5e/eeb95e35128c8066e30250fafcfea9c6.jpg" alt="Heart" /><span>Heart</span></div>
          <div className="organ"><img src="https://i.pinimg.com/1200x/e6/5f/0e/e65f0eb23d2448c40bada77893ae2d49.jpg" alt="Kidney" /><span>Kidney</span></div>
          <div className="organ"><img src="https://i.pinimg.com/1200x/49/44/ee/4944ee3019d7ca3a1fe6ee1af9603ad3.jpg" alt="Liver" /><span>Liver</span></div>
          <div className="organ"><img src="https://i.pinimg.com/736x/75/c2/2f/75c22f023b755465a42bc40a92084b06.jpg" alt="Lungs" /><span>Lungs</span></div>
          <div className="organ"><img src="https://i.pinimg.com/736x/2b/91/72/2b91725bbcea3756342017f3a8250594.jpg" alt="Cornea" /><span>Cornea</span></div>
          <div className="organ"><img src="https://i.pinimg.com/736x/41/db/79/41db798271f13ef4244cf51660fe2089.jpg" alt="Pancreas" /><span>Pancreas</span></div>
        </section>

        <section className="slogan-section">
          <h2>Every Organ Tells a Story of Hope</h2>
          <p>Be a reason someone gets to smile again. Register as a donor, inspire others, and keep lives connected forever.</p>
        </section>
      </main>

      <footer>
        <p>© 2025 LifeLink • Bridging Hope Through Organ Donation</p>
      </footer>
    </>
  );
};

export default FrontPage;
