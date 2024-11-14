import React from 'react';
import '../assets/styles/SkeletonProductLoader.css'; // Importa los estilos

const SkeletonProductLoader: React.FC = () => {
  return (
    <div className="skeleton-product-loader">
      <div className="skeleton-item image"></div>
      <div className="skeleton-item title"></div>
      <div className="skeleton-item price"></div>
    </div>
  );
};

export default SkeletonProductLoader;
