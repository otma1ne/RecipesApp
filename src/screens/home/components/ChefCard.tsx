import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import colors from '../../../theme/colors';
import constants from '../../../theme/constants';
import fonts from '../../../theme/fonts';
import {Chef} from '../useHome';

export default function ChefCard({name, imageUri, nbrRecipes}: Chef) {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.nbrRecipes}>{nbrRecipes} Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 120,
    height: 180,
    backgroundColor: colors.grey,
    borderRadius: constants.borderRadius,
  },
  name: {
    marginTop: 8,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  nbrRecipes: {
    marginTop: 2,
    fontSize: 11,
    fontFamily: fonts.regular,
  },
});
