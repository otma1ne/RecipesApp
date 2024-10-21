import {configureStore} from '@reduxjs/toolkit';
import savedRecipesSlice from './slices/savedRecipesSlice';

const store = configureStore({
  reducer: {
    savedRecipes: savedRecipesSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: __DEV__,
});

export default store;
