import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/products'
import { adressesReducer } from './reducers/adresses'

const reducers = combineReducers({
    products: productsReducer,
    addresses: adressesReducer
})

export default createStore(reducers, applyMiddleware(thunk))