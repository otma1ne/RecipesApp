import axios from 'axios';
import {RECIPES_API} from '../../constants/endpoints';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Recipe} from '../home/useHome';
import {useDispatch} from 'react-redux';
import {saveRecipe} from '../../redux/slices/savedRecipesSlice';
import Config from 'react-native-config';

const useDetail = (route: any) => {
  const {recipeId} = route.params;
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(
        Config.BASE_URL + RECIPES_API + '/' + recipeId,
      );
      if (response.status === 200) {
        setRecipe(response.data);
        console.log(recipe);
      } else {
        Alert.alert('Error', 'Failed to fetch recipe.');
      }
    } catch (error) {
      console.log('Fetch Recipe Error:', error);
      Alert.alert('Error', 'An error occurred while fetching recipe.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveRecipe = (item: Recipe) => {
    dispatch(saveRecipe(item));

    Alert.alert(
      'Recipe Saved',
      `${item.name} has been added to your saved recipes.`,
      [{text: 'OK'}],
    );
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return {
    recipe,
    loading,
    handleSaveRecipe,
  };
};

export default useDetail;
