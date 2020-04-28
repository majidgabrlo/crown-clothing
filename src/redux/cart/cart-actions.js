// ((Redux TUT)) third we write this
import CartActionTypes from './cart-types'

export const toggleCartHidden = () => ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
    // payload is optional property
})

export const addItem = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

// follow on cart-icon-component