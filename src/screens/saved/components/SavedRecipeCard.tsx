import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../../theme/constants';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';

import Trash from '../../../assets/icons/trash.svg';
import {Recipe} from '../../home/useHome';
import {useDispatch} from 'react-redux';
import {unsaveRecipe} from '../../../redux/slices/savedRecipesSlice';

interface RecipeCardProps extends Recipe {
  onRemoveRecipe: () => void;
}

export default function SavecRecipeCard({
  id,
  name,
  image,
  difficulty,
  cookTimeMinutes,
  onRemoveRecipe,
}: RecipeCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image}></Image>
      <View style={styles.recipeInfo}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.info}>
          {cookTimeMinutes} min - {difficulty}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemoveRecipe}>
        <Trash fill={colors.red} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: constants.borderRadius,
  },
  recipeInfo: {
    flex: 1,
    display: 'flex',
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  info: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
});
