import { createSelector } from 'reselect';

// selects cart object from the state
const selectCart = state => state.cart;

// this selects cartItem from the state.cart.cartItem
export const selectCartItems = createSelector( [selectCart], cart => cart.cartItem )
export const selectHidden = createSelector( [selectCart], user => user.hidden)

export const selectCartItemsCount = createSelector (
    [selectCartItems],cartItem => cartItem.reduce((acc,cartItem) => acc+cartItem.quantity, 0)
)
export const selectCartTotal = createSelector (
    [selectCartItems],cartItem => cartItem.reduce((acc,cartItem)=> acc+cartItem.quantity * cartItem.price,0)
)