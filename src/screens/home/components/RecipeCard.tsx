import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Recipe} from '../useHome';
import colors from '../../../theme/colors';
import constants from '../../../theme/constants';
import fonts from '../../../theme/fonts';

import Timer from '../../../assets/icons/timer.svg';

interface RecipeCardProps extends Recipe {
  onOpenDetail: (id: number) => void;
}

export default function RecipeCard({
  id,
  name,
  image,
  difficulty,
  cookTimeMinutes,
  onOpenDetail,
}: RecipeCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onOpenDetail(id)}>
      <View style={styles.imageContainer}>
        <View style={styles.overlay}></View>
        <View style={styles.infos}>
          <Text style={styles.diffucilty}>{difficulty}</Text>
          <View style={styles.cookTimeContainer}>
            <Timer width={18} height={18} stroke={colors.white} />
            <Text style={styles.cookTime}>{cookTimeMinutes} m</Text>
          </View>
        </View>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: constants.borderRadius,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  infos: {
    position: 'absolute',
    top: 8,
    left: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    zIndex: 2,
  },
  diffucilty: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: constants.borderRadius,
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.semiBold,
  },
  cookTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
    backgroundColor: colors.primary,

    borderRadius: constants.borderRadius,
  },
  cookTime: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
  image: {
    width: 180,
    height: 200,
    backgroundColor: colors.grey,
  },
  name: {
    marginTop: 8,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
    textAlign: 'center',
    width: 160,
  },
});
