import { allProducts } from "./Reducers/reducers";
import { createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    products:allProducts,
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store;