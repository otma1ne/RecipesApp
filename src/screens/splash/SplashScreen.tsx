import React from 'react';
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native';
import assets from '../../constants/assets';
import colors from '../../theme/colors';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={assets.logo} style={styles.logo} />
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  logo: {
    width: '45%',
    resizeMode: 'contain',
  },
});
