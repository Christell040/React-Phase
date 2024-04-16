// src/store.js
import { createStore, combineReducers,applyMiddleware } from 'redux';
import counterReducer from './redux/reducer';
import {thunk} from "redux-thunk";
import TodoReducer from './reducers/TodoReducer';

// Create the Redux store
const reducer = combineReducers({
    //all reducers
    Todo: TodoReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState,
    applyMiddleware(...middleware)

);
export default store;