// src/redux/actions.js
import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PROFILE } from './actionTypes';

export const login = (userInfo) => ({
  type: LOGIN,
  payload: userInfo,
});

export const logout = () => ({
  type: LOGOUT,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const updateProfile = (userInfo) => ({
  type: UPDATE_PROFILE,
  payload: userInfo,
});