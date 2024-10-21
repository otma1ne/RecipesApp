import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Recipe} from '../../screens/home/useHome';

interface CartState {
  items: Recipe[];
}

const initialState: CartState = {
  items: [],
};

const savedRecipesSlice = createSlice({
  name: 'savedRecipes',
  initialState,
  reducers: {
    saveRecipe: (state, action: PayloadAction<Recipe>) => {
      const recipe = action.payload;

      const existingItem = state.items.find(item => item.id === recipe.id);
      if (!existingItem) {
        state.items.push({...recipe});
      }
    },
    unsaveRecipe: (state, action: PayloadAction<number>) => {
      const recipeId = action.payload;
      state.items = state.items.filter(item => item.id !== recipeId);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {saveRecipe, unsaveRecipe, clearCart} = savedRecipesSlice.actions;

export default savedRecipesSlice.reducer;
