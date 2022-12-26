import { combineReducers } from '@reduxjs/toolkit';

const initialCountState = {
  count: 0,
}
  
const initialFavotitesUsersState = {
  favorites: [],
}

const initialAuthState = {
  password: "123",
  isAuth: false,
}

const initialGetUserState = {
  loading: false,
  error: '',
  user: [],
}

  const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
      case "AUTH":
        return { ...state, isAuth: action.payload }
      default: 
        return state;
    }
  }

  const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
      case "ADD_DATA":
        return { ...state, count: state.count + action.payload }
      case "REMOVE_DATA":
        return { ...state, count: state.count - action.payload }
      default:
        return state;
    }
  }

  const favoritesUsersReducer = (state = initialFavotitesUsersState, action) => {
    switch (action.type) {
      case "ADD_TO_FAVORITES":
        return { ...state, favorites: [...state.favorites, action.payload] }
      case "REMOVE_FROM_FAVORITES":
        return { ...state, favorites: [...state.favorites.filter(item => item.id !== action.payload)] }
      default:
        return state;
    }
  }

  const getUserReducer = (state = initialGetUserState, { type, payload }) => {
    switch (type) {
      case "GET_USER_LOADING":
        return {
          ...state,
          loading: payload,
        }
      case "GET_USER_SUCCESS":
        return {
          ...state,
          user: payload,
          error: '',
        }
      case "GET_USER_FAIL":
        return {
          ...state,
          error: payload,
        }
      default:
        return state;
    }
  }

  export const rootReducer = combineReducers({
    countReducer,
    favoritesUsersReducer,
    authReducer,
    getUserReducer,
  })