// This file is the base reducer object that represent all of the state of our application
import { combineReducers } from 'redux'
import userReducer from './users/user-reducer'
// ((Redux TUT))then add our reducer function here
import cartReducer from './cart/cart-reducers'

// combineReducers is a function that makes our root reducer
export default combineReducers({
    // the key((user)) in the next line represents the individual slices of our primary state 
    user: userReducer,
    // ((Redux TUT)) then add to our primary state
    cart:cartReducer
    // ((Redux TUT)) after we use it in our component ((in header.js))
})