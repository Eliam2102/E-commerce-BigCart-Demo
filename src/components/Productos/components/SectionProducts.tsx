import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { cargarProductos } from '../../../controllers/productoController';
import CardProduct from './CardProduct';
import '../assets/styles/SectionProduct.css';
import { Product } from '../interfaces/Product';
import SkeletonProductLoader from './SkeletonProducto';

const CatalogsProducts: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]); // Estado para los productos

  // // Cargar los productos desde el archivo JSON
  // useEffect(() => {
  //   fetch('/public/products.json') //ruta public
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Error al cargar productos');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setProducts(data)) // asigno los productos acutalizando el estado de productos
  //     .catch((error) => console.error('Error al cargar productos:', error));
  // }, []);

  const dispatch = useDispatch<AppDispatch>();
  const {productos, isLoading, error} = useSelector(
    (state: RootState) => state.productos,
  );
  useEffect(
    () => {
      dispatch(cargarProductos());
    }, [dispatch]
  );

  return (
    <section className="products-section">
      <h2>Catálogo de Productos</h2>
      {isLoading && (
        <div className="skeleton-loader products-grid">
          {/* Aquí utilizas tu componente de Skeleton */}
       
          <SkeletonProductLoader  /> 
          <SkeletonProductLoader  /> 
          <SkeletonProductLoader  /> 
          <SkeletonProductLoader  /> 
          <SkeletonProductLoader  /> 
        </div>
      )}
      {error && <p>Error al cargar productos, Error: {error}</p>}
      {!isLoading && !error && productos.length > 0 &&(
        <div className="products-grid">
          {productos.map((product) => (
            <CardProduct key={product.idProducto} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CatalogsProducts;
