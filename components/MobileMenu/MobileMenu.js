import "./styles.scss";

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="menu-overlay" onClick={closeMenu}>
      <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={closeMenu}>
          &times;
        </button>
        <a href="#services" onClick={closeMenu}>
          Paslaugos
        </a>
        <a href="#about" onClick={closeMenu}>
          Apie Mus
        </a>
        <a href="#contact" onClick={closeMenu}>
          Kontaktai
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
