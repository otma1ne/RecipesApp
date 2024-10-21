import {useEffect, useState} from 'react';
import {Alert, ImageSourcePropType} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {saveRecipe} from '../../redux/slices/savedRecipesSlice';
import Config from 'react-native-config';
import {RECIPES_API} from '../../constants/endpoints';
import assets from '../../constants/assets';

export type Category = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

export type Chef = {
  id: number;
  name: string;
  imageUri: ImageSourcePropType;
  nbrRecipes: number;
};

export type Recipe = {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cookTimeMinutes: number;
  caloriesPerServing?: number;
  ingredients?: any;
  instructions?: any;
};

const useHome = (navigation: any) => {
  const categories: Category[] = [
    {id: 1, name: 'Soup', image: assets.soup},
    {id: 2, name: 'Seafood', image: assets.crevette},
    {id: 3, name: 'Sushi', image: assets.sushi},
    {id: 4, name: 'Soup', image: assets.soup},
    {id: 5, name: 'Seafood', image: assets.crevette},
  ];

  const chefs: Chef[] = [
    {id: 1, name: 'Chef John', imageUri: assets.chef1, nbrRecipes: 23},
    {id: 2, name: 'Chef Antonio', imageUri: assets.chef2, nbrRecipes: 25},
    {id: 3, name: 'Chef Amanda', imageUri: assets.chef3, nbrRecipes: 30},
  ];

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://dummyjson.com' + RECIPES_API);
      if (response.status === 200) {
        setRecipes(response.data.recipes);
      } else {
        Alert.alert('Error', 'Failed to fetch recipes.');
      }
    } catch (error) {
      console.log('Fetch Recipes Error:', error);
      Alert.alert('Error', 'An error occurred while fetching recipes.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDetail = (item: any) => {
    navigation.navigate('Detail', {recipeId: item});
  };

  const handleSaveRecipe = (item: any) => {
    dispatch(saveRecipe(item));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    categories,
    chefs,
    recipes,
    loading,
    handleOpenDetail,
    handleSaveRecipe,
  };
};

export default useHome;
