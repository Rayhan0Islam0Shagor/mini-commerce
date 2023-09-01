'use client';
import { productType } from '@/types/product.type';
import * as React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: productType) => {},
  removeItem: (item: productType) => {},
  clearItems: () => {},
});

type initialStateType = {
  items: productType[];
  totalAmount: number;
};

const initialState: initialStateType = {
  items: [],
  totalAmount: 0,
};

type ActionType = {
  type: 'ADD' | 'REMOVE' | 'CLEAR';
  item: productType;
};

const cartReducer = (state: any, action: ActionType) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item: productType) => item.id === action.item.id,
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1 || action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item: productType) => item.id === action.item.id,
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: productType) => item.id !== action.item.id,
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'CLEAR') {
    return initialState;
  }

  return initialState;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    initialState,
  );

  const addItemCartHandler = (item: productType) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (item: productType) => {
    dispatchCartAction({ type: 'REMOVE', item: item });
  };

  const clearCartHandler = () => {
    // @ts-ignore
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => React.useContext(CartContext);
