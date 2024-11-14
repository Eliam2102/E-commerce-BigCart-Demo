import React from 'react';
import { Product } from '../interfaces/Product';
import '../assets/styles/CardProduct.css';

interface ProductProps {
  product: Product;
}

const CardProduct: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="card">
      <img src={'https://picsum.photos/200/200'} alt={product.nombreProducto} className="product-image" />
      {/* {product.discount && <span className="discount-badge">{product.discount}% OFF</span>} */}
      <h3 className="product-name">{product.nombreProducto}</h3>
      <p className="category">{product.categoria}</p>
      <div className="price-container">
        <span className="current-price">${product.precio}</span>
        {/* {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>} */}
      </div>
       <p className="sales">{100} vendidos</p>
      <div className="rating">⭐⭐⭐⭐⭐ {4.5}</div>
      {/* {product.isBestSeller && <span className="best-seller">Más vendido</span>}  */}
    </div>
  );
};

export default CardProduct;
