import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

const CustomTextInput = ({style, ...props}: any) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: colors.transparent,
    backgroundColor: colors.greyLighter,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    minHeight: 50,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});

export default CustomTextInput;
