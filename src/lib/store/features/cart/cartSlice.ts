
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../api/apiSlice';
import { RootState } from '../../store';


export interface CartItem extends Product {
    quantity: number;
}


interface CartState {
    items: CartItem[];
}

// O estado inicial do carrinho é uma lista de produtos vazia
const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<Product>) => {
            const itemToAdd = action.payload;
            // Verifica se o produto já existe no carrinho
            const existingItem = state.items.find((item) => item.id === itemToAdd.id);

            if (existingItem) {
                // Se já existe, incrementa a quantidade em +1
                existingItem.quantity += 1;
            } else {
                // Se não, adiciona o novo produto com quantidade 1
                state.items.push({ ...itemToAdd, quantity: 1 });
            }
        },
    },
});


export const { addItemToCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;