// this file is for making our store file
import {createStore,applyMiddleware} from 'redux';
// middleware is a function that takes the action and dispatch it to reducer
// logger is a middle ware
import {logger} from 'redux-logger'
// persistStore is for storing data
import {persistStore} from 'redux-persist'
import rootReducer from './root-reducer'
// the middleware that store expecting from redux is a array
const middlewares=[logger]

const store=createStore(rootReducer,applyMiddleware(...middlewares))
const persistor = persistStore(store)

export {store, persistor};