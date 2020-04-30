import { createSelector } from 'reselect';

// selects cart object from the state
const selectCart = state => state.cart;

// this selects cartItem from the state.cart.cartItem
export const selectCartItems = createSelector( [selectCart], cart => cart.cartItem )

export const selectCartItemsCount = createSelector (
    [selectCartItems],cartItems => cartItems.reduce((acc,cartItem) => acc+cartItem.quantity, 0)
)