"use client";

import "./styles.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Opening Times */}
        <div className="footer-section opening-times">
          <ul className="opening-times-list">
            <li><span>Pirmadienis:</span> <span>9:00 - 19:00</span></li>
            <li><span>Antradienis:</span> <span>9:00 - 19:00</span></li>
            <li><span>Trečiadienis:</span> <span>9:00 - 19:00</span></li>
            <li><span>Ketvirtadienis:</span> <span>9:00 - 19:00</span></li>
            <li><span>Penktadienis:</span> <span>9:00 - 19:00</span></li>
            <li><span>Šeštadienis:</span> <span>10:00 - 16:00</span></li>
            <li><span>Sekmadienis:</span> <span>Uždaryta</span></li>
          </ul>
        </div>

        <div className="footer-section map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.532624774101!2d24.36319081585543!3d55.74799048055241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e63185a5e5d5b7%3A0x1e2d3f6b6d6b5e5d!2sAuk%C5%A1tai%C4%8Di%C5%B3%20g.%2085%2C%20Panev%C4%97%C5%BEys%2036109%2C%20Lithuania!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <div className="footer-section">
          <Image
            src="/images/logotipas.svg"
            alt="Salon Logo"
            width={240}
            height={110}
            className="footer-logo"
          />

          <div className="socials">
            <a
              href="https://www.facebook.com/ligitosgroziosalonas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Ligitos Grožio Salonas | Dizainas ir programavimas Austėja Matuzaitė
      </div>
    </footer>
  );
};

export default Footer;
