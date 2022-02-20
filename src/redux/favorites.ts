import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book} from '@src/api/queries/fetchBestSellers';

const initialState: Book[] = [];

const favoritesBooksSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Book>) => [
      ...state,
      action.payload,
    ],
    removeFavorites: (state, action: PayloadAction<Book>) =>
      state.filter(item => item?.book_uri !== action?.payload?.book_uri),
  },
});

export const {addFavorites, removeFavorites} = favoritesBooksSlice.actions;
export default favoritesBooksSlice.reducer;
