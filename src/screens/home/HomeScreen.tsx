import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import constants from '../../theme/constants';
import assets from '../../constants/assets';
import fonts from '../../theme/fonts';
import CategoryCard from './components/CategoryCard';
import ChefCard from './components/ChefCard';
import SearchIcon from '../../assets/icons/search.svg';
import BurgerMenu from '../../assets/icons/burger-menu.svg';
import useHome, {Category, Chef, Recipe} from './useHome';
import RecipeCard from './components/RecipeCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}: any) {
  const {
    categories,
    chefs,
    recipes,
    loading,
    handleOpenDetail,
    handleSaveRecipe,
  } = useHome(navigation);

  const renderCategoryItem = ({item}: {item: Category}) => (
    <CategoryCard id={item.id} name={item.name} image={item.image} />
  );

  const renderChefItem = ({item}: {item: Chef}) => (
    <ChefCard
      id={item.id}
      name={item.name}
      imageUri={item.imageUri}
      nbrRecipes={item.nbrRecipes}
    />
  );

  const renderRecipeItem = ({item}: {item: Recipe}) => (
    <RecipeCard
      id={item.id}
      name={item.name}
      image={item.image}
      difficulty={item.difficulty}
      cookTimeMinutes={item.cookTimeMinutes}
      onOpenDetail={handleOpenDetail}
    />
  );

  // Reusable FlatList component
  const renderSection = <T extends Category | Chef>(
    title: string,
    data: T[],
    renderItem: ({item}: {item: T}) => JSX.Element,
  ) => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionLink}>view all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );

  const openSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.searchIcon} onPress={openSettings}>
          <BurgerMenu width={32} height={32} stroke={colors.primary} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={assets.logo} style={styles.logo} />
        </View>
        <View style={styles.searchIcon}>
          <Ionicons name="search" size={24} color={colors.primary} />
        </View>
      </View>

      {/* Body with ScrollView */}
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.title}>What do you want to cook today?</Text>

        {/* Categories Section */}
        {renderSection('Categories', categories, renderCategoryItem)}

        {/* Top Chef Section */}
        {renderSection('Top Chefs', chefs, renderChefItem)}

        {/* Popular Recipes Section */}
        {renderSection('Popular Recipes', recipes, renderRecipeItem)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: constants.padding,
  },
  circleAvatar: {
    width: 50,
    height: 50,
  },
  circleAvatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 45,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    padding: constants.padding,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  sectionLink: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  flatListContent: {
    marginTop: 16,
    paddingHorizontal: 5,
  },
});
