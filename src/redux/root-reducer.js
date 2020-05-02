// This file is the base reducer object that represent all of the state of our application
import { combineReducers } from 'redux'
import userReducer from './users/user-reducer'
import {persistReducer} from 'redux-persist'
// storage in next line is actually local storage
import storage from 'redux-persist/lib/storage'
// ((Redux TUT))then add our reducer function here
import cartReducer from './cart/cart-reducers'
import directoryReducer from './directory/directory-reducer'
import shopReducer from './shop/shop-reducer'
const persistConfig={
    // shows at what point of reducer we want to save our data
    key:'root',
    storage,
    // whiteList is reducers that we want to save to our storage
    whitelist:['cart']
}

// combineReducers is a function that makes our root reducer
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig, rootReducer)
