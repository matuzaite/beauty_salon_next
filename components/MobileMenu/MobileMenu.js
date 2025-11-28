"use client";

import "./styles.scss";

const MobileMenu = ({ closeMenu }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '0'
        );
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  return (
    <div className="menu-overlay" onClick={closeMenu}>
      <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={closeMenu}>
          &times;
        </button>
        <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
          Paslaugos
        </a>
        <a href="#footer" onClick={(e) => handleNavClick(e, "footer")}>
          Darbo Laikas
        </a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
          Kontaktai
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
