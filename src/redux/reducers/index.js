// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Ensure this path is correct
import cartReducer from './cartReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;