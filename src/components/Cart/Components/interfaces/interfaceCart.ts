// src/interfaces/ShoppingCart.ts
import { CartItem } from '../../Components/interfaces/itemInterface';

export interface ShoppingCart {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (idProducto: number) => void;
  updateItemQuantity: (idProducto: number, quantity: number) => void;
}
