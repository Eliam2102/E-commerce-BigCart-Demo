import '../assets/styles/Home.css';
import TapeClientes from './CarouselClientes';
import { Link } from 'react-router-dom';
import imgElect from '../../Productos/assets/img/elect.jpg';
import imgHog from '../../Productos/assets/img/hogar.webp';
import imgJug from '../../Productos/assets/img/plasticos.jpg';
import product1 from '../assets/img/llaves.jpg';
import product2 from '../assets/img/amazon-fire.webp';
import product3 from '../assets/img/plumas-2.webp';
import imgAudi from '../assets/img/audifonos.webp';
import imgTiburon from '../assets/img/tiburoncin.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Banner destacado */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a BigCart</h1>
          <p>Productos de calidad al mejor precio</p>
          <button className="shop-now-btn">Comprar Ahora</button>
        </div>
      </section>
      {/* Bienvenida */}
      <section className="welcome-section">
      <h2>Donde la variedad y los precios al por mayor se encuentran.</h2>
      <p>Nos enorgullece ofrecerte miles de productos en todas las categorías imaginables, diseñados para satisfacer todas tus necesidades de negocio. 
        Desde artículos de tendencia hasta básicos de alta demanda, en BigCart encontrarás un catálogo vasto y actualizado pensado para 
        ayudarte a abastecer tu negocio con facilidad y eficiencia.</p>
      <p>Aquí, valoramos cada compra al por mayor y trabajamos para ofrecerte no solo precios competitivos, 
        sino también una experiencia de compra rápida y confiable. 
        ¡Explora nuestras categorías, selecciona los productos que necesitas y 
        disfruta de los beneficios de comprar al por mayor con nosotros!</p>
      </section>
      {/* Clientes */}
      <section className="categories">
        <h2>Nuestros clientes</h2>
        <TapeClientes/>
      </section>

       {/* Categorías */}
       {/* Categorías */}
      <section className="categories">
        <h2>Las categorías más top</h2>
        <div className="category-list">
          <div className="category-card">
            <img src={imgElect} alt="Electrónica" />
            <div className="category-info">
              <h3>Electrónica</h3>
              <div className="rating">
                ⭐⭐⭐⭐⭐
                <span>5.0</span>
              </div>
            </div>
          </div>
          <div className="category-card">
            <img src={imgHog} alt="Ropa" />
            <div className="category-info">
              <h3>Ropa</h3>
              <div className="rating">
                ⭐⭐⭐⭐☆
                <span>4.7</span>
              </div>
            </div>
          </div>
          <div className="category-card">
            <img src={imgHog}alt="Hogar" />
            <div className="category-info">
              <h3>Hogar</h3>
              <div className="rating">
                ⭐⭐⭐⭐☆
                <span>4.5</span>
              </div>
            </div>
          </div>
          <div className="category-card">
            <img src={imgJug} alt="Juguetes" />
            <div className="category-info">
              <h3>Juguetes</h3>
              <div className="rating">
                ⭐⭐⭐⭐☆
                <span>4.6</span>
              </div>
            </div>
          </div>
        </div>
        <Link to="/products" className="category-button">
          Ir a categorías
        </Link>
      </section>


      {/* Productos Destacados */}
      <section className="featured-products">
        <h2>Productos top</h2>
        <div className="product-list">
          <div className="product-card">
            <img src={product1} alt="Producto 1" />
            <h3>Producto 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src={product2} alt="Producto 2" />
            <h3>Producto 2</h3>
            <p>$39.99</p>
          </div>
          <div className="product-card">
            <img src={product3} alt="Producto 3" />
            <h3>Producto 3</h3>
            <p>$19.99</p>
          </div>
        </div>
      </section>

      {/* Ofertas Especiales */}
      <section className="special-offers">
        <h2>Ofertas Especiales</h2>
        <div className="offer-list">
          <div className="offer-card">
            <img src={imgAudi} alt="Oferta 1" />
            <div className="offer-details">
              <h3>Audífonos realme</h3>
              <p className="old-price">$49.99</p>
              <p className="new-price">$29.99</p>
              <button className="buy-now-btn">Comprar Ahora</button>
            </div>
          </div>
          <div className="offer-card">
            <img src={imgTiburon} alt="Oferta 2" />
            <div className="offer-details">
              <h3>Sandalías de tiburón</h3>
              <p className="old-price">$59.99</p>
              <p className="new-price">$39.99</p>
              <button className="buy-now-btn">Comprar Ahora</button>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="call-to-action">
        <h2>Únete a Nuestra Comunidad</h2>
        <p>Regístrate para recibir ofertas exclusivas y descuentos especiales.</p>
        <button className="sign-up-btn">Regístrate Ahora</button>
      </section>
    </div>
  );
};

export default Home;
