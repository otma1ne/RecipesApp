import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';
import constants from '../../../theme/constants';
import {Category} from '../useHome';

export default function CategoryCard({name, image}: Category) {
  return (
    <View style={styles.categoryContainer}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginRight: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: colors.primaryLighter,
    borderRadius: constants.borderRadius,
  },
  categoryImage: {
    width: 20,
    height: 20,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.black,
  },
});
