// src/redux/reducers/userReducer.js
const initialState = {
    isAuthenticated: false,
    userInfo: {},
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isAuthenticated: true, userInfo: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, userInfo: {} };
      default:
        return state;
    }
  };
  
  export default userReducer;