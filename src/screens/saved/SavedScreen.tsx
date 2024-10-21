import {ScrollView, StyleSheet, Text, View} from 'react-native';
import fonts from '../../theme/fonts';
import constants from '../../theme/constants';
import colors from '../../theme/colors';
import SavecRecipeCard from './components/SavedRecipeCard';
import {Recipe} from '../home/useHome';
import useSaved from './useSaved';

export default function SavedScreen() {
  const {savedItems, handleUnsaveRecipe} = useSaved();

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Text style={styles.title}>Saved Recipes</Text>
      <View style={styles.listContainer}>
        {savedItems.length > 0 ? (
          savedItems.map((recipe: Recipe) => (
            <SavecRecipeCard
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              difficulty={recipe.difficulty}
              cookTimeMinutes={recipe.cookTimeMinutes}
              onRemoveRecipe={() => handleUnsaveRecipe(recipe.id)}
            />
          ))
        ) : (
          <Text style={styles.noItemsText}>No saved recipes yet.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.white,
    padding: constants.padding,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  listContainer: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  noItemsText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.grey,
    textAlign: 'center',
    marginTop: 80,
  },
});
