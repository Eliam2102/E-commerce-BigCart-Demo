import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImagePath from '../assets/img/BIgCart.svg';
import iconCart from '../assets/img/icon-cart.svg';
import "../assets/styles/NavBar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string): string => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleDropdown = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (): void => {
    setDropdownOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-middle">
        <Link to="/" className="navbar-brand">
          <img
            src={logoImagePath}
            width="220"
            height="156"
            className="navbar-logo"
            alt="Brand Logo"
          />
        </Link>

        {/* Dropdown y carrito */}
        <div className="navbar-right">
          <div className="navbar-dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <div className={`hamburger-icon ${isDropdownOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li className="nav-item">
                <Link to="/about-us" className={`nav-link ${isActive("/about-us")}`} onClick={closeDropdown}>Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className={`nav-link ${isActive("/productos")}`} onClick={closeDropdown}>Productos</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className={`nav-link ${isActive("/contactus")}`} onClick={closeDropdown}>Contáctenos</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className={`nav-link ${isActive("/login")}`} onClick={closeDropdown}>Iniciar sesión</Link>
              </li>
              <li className="nav-item">
                <Link to="/account" className={`nav-link ${isActive("/account")}`} onClick={closeDropdown}>Mi cuenta</Link>
              </li>
            </ul>
          </div>

          {/* Carrito */}
          {/* Carrito */}
            <div className={`btn-cart ${isActive("/Cart") ? 'active' : ''}`}>
              <Link to="/Cart">
                <img src={iconCart} width="25" height="25" alt="Cart Icon" />
              </Link>
            </div>
        </div>
      </div>

      {/* Botón "hamburger" para el menú móvil */}
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="menu-icon"></div>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={toggleMobileMenu}></div>
        <ul className="navbar-nav">
          <li className={`nav-item ${isActive("/about-us")}`}>
            <Link to="/about-us" className="nav-link" onClick={toggleMobileMenu}>Nosotros</Link>
          </li>
          <li className={`nav-item ${isActive("/products")}`}>
            <Link to="/products" className="nav-link" onClick={toggleMobileMenu}>Productos</Link>
          </li>
          <li className={`nav-item ${isActive("/contactus")}`}>
            <Link to="/contactus" className="nav-link" onClick={toggleMobileMenu}>Contáctenos</Link>
          </li>
          <li className={`nav-item ${isActive("/login")}`}>
            <Link to="/login" className="nav-link" onClick={toggleMobileMenu}>Iniciar sesión</Link>
          </li>
          <li className={`nav-item ${isActive("/account")}`}>
            <Link to="/account" className="nav-link" onClick={toggleMobileMenu}>Mi cuenta</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
