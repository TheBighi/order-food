import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialCartState = { items: [] };

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    return state;
};


const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', item: item });
    };

    const cartContextValue = {
        items: cartState.items,
        addItem: addItem,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;