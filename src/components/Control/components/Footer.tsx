import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <p>Conéctate con nosotros en redes sociales:</p>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__content">
        <div className="footer__section">
          <h3>BigCart</h3>
          <p>Explora nuestras secciones y conoce más sobre nosotros y nuestros productos.</p>
        </div>
        <div className="footer__section">
          <h4>Categorias</h4>
          <ul>
            <li><Link to="/products/angular">Electrónica </Link></li>
            <li><Link to="/products/react">Hogar</Link></li>
            <li><Link to="/products/vue">Escolar</Link></li>
            <li><Link to="/products/laravel">Electrodomésticos</Link></li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Enlaces Útiles</h4>
          <ul>
            <li><Link to="/pricing">Productos</Link></li>
            <li><Link to="/settings">Contactanos</Link></li>
            <li><Link to="/orders">Comprar ahora</Link></li>
            <li><Link to="/help">Ayuda</Link></li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Contacto</h4>
          <p>Calle 60 No. 488, Centro, 97000 Mérida, Yucatán, MX</p>
          <p>bigcart213@bigcart.com.mx</p>
          <p>+52 8009 054294</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy;2024 BigCart | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
