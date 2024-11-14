// src/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  idProducto: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity' | 'totalPrice'>>) => {
      const existingItem = state.items.find(item => item.idProducto === action.payload.idProducto);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<{ idProducto: number }>) => {
      const existingItem = state.items.find(item => item.idProducto === action.payload.idProducto);
      if (existingItem) {
        state.totalAmount -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.idProducto !== action.payload.idProducto);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
    updateItemQuantity: (state, action: PayloadAction<{ idProducto: number; quantity: number }>) => {
      const existingItem = state.items.find(item => item.idProducto === action.payload.idProducto);
      if (existingItem) {
        state.totalAmount -= existingItem.totalPrice;
        existingItem.quantity = action.payload.quantity;
        existingItem.totalPrice = existingItem.price * action.payload.quantity;
        state.totalAmount += existingItem.totalPrice;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
