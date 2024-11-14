// src/context/ShoppingCartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ShoppingCart } from '../interfaces/interfaceCart';
import { CartItem } from '../interfaces/itemInterface';

const ShoppingCartContext = createContext<ShoppingCart | null>(null);

export const ShoppingCartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(item => item.idProducto === newItem.idProducto);
      if (existingItem) {
        return prevItems.map(item =>
          item.idProducto === newItem.idProducto
            ? { ...item, quantity: Math.min(item.quantity + newItem.quantity, item.stock) }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (idProducto: number) => {
    setItems(prevItems => prevItems.filter(item => item.idProducto !== idProducto));
  };

  const updateItemQuantity = (idProducto: number, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.idProducto === idProducto ? { ...item, quantity } : item
      )
    );
  };

  const totalAmount = items.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <ShoppingCartContext.Provider value={{ items, totalAmount, addItem, removeItem, updateItemQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
