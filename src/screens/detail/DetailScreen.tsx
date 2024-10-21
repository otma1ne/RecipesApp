import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import constants from '../../theme/constants';
import useDetail from './useDetail';
import colors from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../theme/fonts';

import Timer from '../../assets/icons/timer.svg';
import Fire from '../../assets/icons/fire.svg';
import ChefHat from '../../assets/icons/chefhat.svg';
import InfoItem from './components/InfoItem';
import CustomButton from '../../components/CustomButton';

export default function DetailScreen({route, navigation}: any) {
  const {recipe, loading, handleSaveRecipe} = useDetail(route);

  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.body}>
            <View style={[styles.imageContainer, {height: screenWidth * 0.7}]}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.7)', 'transparent']}
                start={{x: 0.5, y: 1}}
                end={{x: 0.5, y: 0}}
                style={styles.overlay}
              />
              <Image source={{uri: recipe?.image}} style={styles.image} />
              <View style={styles.info}>
                <View style={styles.cookTimeContainer}>
                  <Timer width={18} stroke={colors.grey} />
                  <Text style={styles.cookTime}>
                    {recipe?.cookTimeMinutes} min
                  </Text>
                </View>
                <Text style={styles.name}>{recipe?.name}</Text>
              </View>
            </View>
            <View style={styles.rowInfo}>
              <InfoItem
                icon={Fire}
                iconColor="#FA4F69"
                label="Calories"
                value={recipe?.caloriesPerServing}
              />
              <InfoItem
                icon={ChefHat}
                iconColor="#5B83E7"
                label="Ingredients"
                value={recipe?.ingredients.length}
              />
              <InfoItem
                icon={Timer}
                iconColor="#EE8B4D"
                label="Cooking time"
                value={recipe?.cookTimeMinutes}
              />
            </View>
            <View style={styles.ingredientContainer}>
              <Text style={styles.ingredientTitle}>Ingredients</Text>
              {recipe?.ingredients.map((ingredient: string, index: number) => (
                <Text key={index} style={styles.ingredientItem}>
                  • {ingredient}
                </Text>
              ))}
            </View>
            <View style={styles.instructionContainer}>
              <Text style={styles.ingredientTitle}>Instrcutions</Text>
              {recipe?.instructions.map((ingredient: string, index: number) => (
                <Text key={index} style={styles.ingredientItem}>
                  • {ingredient}
                </Text>
              ))}
            </View>
          </ScrollView>
          <View style={styles.button}>
            <CustomButton
              title="Save the recipe"
              onPress={() => handleSaveRecipe(recipe!)}
            />
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: constants.padding,
    backgroundColor: colors.white,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    borderRadius: constants.borderRadius,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  info: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: constants.padding,
    zIndex: 2,
  },
  cookTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cookTime: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.grey,
  },
  name: {
    marginTop: 8,
    fontSize: 22,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: colors.primary,
  },
  rowInfo: {
    paddingVertical: constants.padding,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primaryLighter,
    borderRadius: constants.borderRadius,
  },
  ingredientContainer: {
    marginTop: 16,
  },
  ingredientTitle: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.black,
    marginBottom: 12,
  },
  ingredientItem: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: fonts.medium,
    marginBottom: 6,
  },
  instructionContainer: {
    marginTop: 16,
  },
  button: {
    backgroundColor: colors.white,
    padding: constants.padding,
  },
});
