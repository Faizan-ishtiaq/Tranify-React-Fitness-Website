import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {

  useEffect(() => {
    const openBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.nav-menu-mobile');
    const closeBtn = document.querySelector('.nav-menu-mobile .close-btn');

    if (!openBtn || !mobileNav) return;

    function open() { mobileNav.classList.add('open'); }
    function close() { mobileNav.classList.remove('open'); }

    openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);

    // close when clicking a link inside the mobile nav
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    // close when clicking outside
    function clickOutside(e) {
      if (!mobileNav.contains(e.target) && !openBtn.contains(e.target)) close();
    }
    document.addEventListener('click', clickOutside);

    return () => {
      openBtn.removeEventListener('click', open);
      if (closeBtn) closeBtn.removeEventListener('click', close);
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-heading">Trainify</h1>

        <div className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#subscription">Subscription</a></li>
          </ul>
        </div>

        <div className="connect">
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
          >
            Connect with Me
          </button>
        </div>

        {/* Mobile hamburger (visible on small screens) */}
        <button className="hamburger-btn" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* Mobile slide-in nav panel */}
      <nav className="nav-menu-mobile" aria-hidden="true">
        <button className="close-btn" aria-label="Close">✕</button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#subscription">Subscription</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="mobile-cta">
          <button
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              document.querySelector('.nav-menu-mobile')?.classList.remove('open');
            }}
          >
            Connect with Me
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;