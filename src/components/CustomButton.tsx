import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';
import theme from '../theme';
import constants from '../theme/constants';
import fonts from '../theme/fonts';

const CustomButton = ({title, onPress, style, textStyle, ...props}: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: constants.borderRadius,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: fonts.semiBold,
  },
});

export default CustomButton;
