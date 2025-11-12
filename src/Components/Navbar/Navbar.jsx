import React, { useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const openBtnRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const menu = menuRef.current;
    const openBtn = openBtnRef.current;
    if (!navbar || !menu || !openBtn) return;

    const openMenu = () => {
      navbar.classList.add("nav-open");
      menu.setAttribute("aria-hidden", "false");
    };
    const closeMenu = () => {
      navbar.classList.remove("nav-open");
      menu.setAttribute("aria-hidden", "true");
    };

    // toggle open on hamburger click
    const onOpenClick = (e) => {
      e.stopPropagation();
      if (navbar.classList.contains("nav-open")) closeMenu();
      else openMenu();
    };
    openBtn.addEventListener("click", onOpenClick);

    // close when clicking outside the menu
    const onDocClick = (e) => {
      if (!navbar.classList.contains("nav-open")) return;
      if (menu.contains(e.target) || openBtn.contains(e.target)) return;
      closeMenu();
    };
    document.addEventListener("click", onDocClick);

    // close when clicking links inside menu and perform smooth scroll
    const links = menu.querySelectorAll("a[href^='#']");
    links.forEach((a) => {
      const handler = (ev) => {
        ev.preventDefault();
        const targetId = a.getAttribute("href").slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          // close first for better UX (menu slides away), then scroll with slight delay
          closeMenu();
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 220); // 200ms matches menu close animation
        } else {
          // if no element found, just close
          closeMenu();
        }
      };
      a.addEventListener("click", handler);
      // store handler on element for cleanup
      a._navHandler = handler;
    });

    // close button inside menu
    const closeBtn = menu.querySelector(".close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    return () => {
      openBtn.removeEventListener("click", onOpenClick);
      document.removeEventListener("click", onDocClick);
      links.forEach((a) => {
        if (a._navHandler) a.removeEventListener("click", a._navHandler);
        delete a._navHandler;
      });
      if (closeBtn) closeBtn.removeEventListener("click", closeMenu);
    };
  }, []);

  // helper for desktop Connect button to smooth-scroll
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <h1 className="navbar-heading">Trainify</h1>

      {/* desktop nav (kept exactly as you had it) */}
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
        <button onClick={scrollToContact}>Connect with Me</button>
      </div>

      {/* hamburger visible on mobile via CSS */}
      <button
        ref={openBtnRef}
        className="hamburger-btn"
        aria-label="Open menu"
        type="button"
      >
        <span className="hb-line" />
        <span className="hb-line" />
        <span className="hb-line" />
      </button>

      {/* mobile slide-in menu (anchors for single-page) */}
      <div className="nav-menu-mobile" ref={menuRef} aria-hidden="true">
        <button className="close-btn" aria-label="Close menu">✕</button>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#subscription">Subscription</a></li>
        </ul>

        <div className="mobile-cta">
          <button
            className="mobile-connect"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                // close menu then scroll
                // menu closes by link handlers; but ensure close + scroll
                document.querySelector(".navbar")?.classList.remove("nav-open");
                setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 220);
              }
            }}
          >
            Connect with Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;