import {useDispatch, useSelector} from 'react-redux';
import {unsaveRecipe} from '../../redux/slices/savedRecipesSlice';

const useSaved = () => {
  const savedItems = useSelector(state => state.savedRecipes.items);
  const dispatch = useDispatch();

  const handleUnsaveRecipe = (recipeId: number) => {
    dispatch(unsaveRecipe(recipeId));
  };

  return {
    savedItems,
    handleUnsaveRecipe,
  };
};

export default useSaved;
