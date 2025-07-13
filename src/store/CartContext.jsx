import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = getExistingItemIndex(state, action);

      const updatedItemsArray = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItems = state.items[existingCartItemIndex];

        const updatedItem = {
          ...existingItems,
          quantity: existingItems.quantity + 1,
        };

        updatedItemsArray[existingCartItemIndex] = updatedItem;
      } else {
        updatedItemsArray.push({ ...action.item, quantity: 1 });
      }

      return {
        ...state,
        items: updatedItemsArray,
      };
    }

    case "REMOVE_ITEM": {
      const existingCartItemIndex = getExistingItemIndex(state, action);

      const existingCartItem = state.items[existingCartItemIndex];

      const updatedItemsArray = [...state.items];

      if (existingCartItem.quantity === 1) {
        const updatedItems = [...state.items];
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };

        updatedItemsArray[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItemsArray,
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
}

function getExistingItemIndex(state, action) {
  return state.items.findIndex((item) => item.id === action.item.id);
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function handleAddItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function handleRemoveItem(itemId) {
    dispatchCartAction({ type: "REMOVE_ITEM", item: { id: itemId } });
  }

  function handleClearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContextValue = {
    items: cart.items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    clearCart: handleClearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
