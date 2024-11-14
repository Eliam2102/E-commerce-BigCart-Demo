// src/interfaces/CartItem.ts
import { Product } from '../../../Productos/interfaces/Product';

export interface CartItem extends Product {
  quantity: number;
}
