import {combineReducers} from '@reduxjs/toolkit';
import favoritesReducer from '@src/redux/favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;
