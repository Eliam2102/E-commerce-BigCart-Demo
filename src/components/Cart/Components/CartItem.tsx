import React from 'react';
import '../assets/styles/CartItem.css';
import iconAdd from '../assets/img/add_36dp_000_FILL0_wght400_GRAD0_opsz40.png';
import iconMinus from '../assets/img/delete_36dp_000_FILL0_wght400_GRAD0_opsz40.png';
import iconDelete from '../assets/img/remove_36dp_000_FILL0_wght400_GRAD0_opsz40.png';

interface CartItemProps {
  item: {
    idProducto: number;
    nombre: string;
    cantidad: number;
    precio: number;
    imagen: string;
  };
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.imagen} alt={item.nombre} />
      <div className="cart-item-details">
        <div className="cart-item-title">{item.nombre}</div>
        <div className="cart-item-quantity">
          <button onClick={() => onUpdateQuantity(item.cantidad - 1)} className="quantity-btn">
            <img src={iconAdd} />
          </button>
          <input type="text" value={item.cantidad} id="quantity-input-edit" readOnly />
          <button onClick={() => onUpdateQuantity(item.cantidad + 1)} className="quantity-btn">
            <img src={iconDelete}/>
          </button>
        </div>
        <div className="cart-item-price">${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
      <button onClick={onRemove} className="remove-item">
        <img src={iconMinus}/>
      </button>
    </div>
  );
};

export default CartItemComponent;
