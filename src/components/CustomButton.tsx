import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import colors from '../theme/colors';
import constants from '../theme/constants';
import fonts from '../theme/fonts';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
  loading?: boolean;
};

const CustomButton = ({
  title,
  onPress,
  style,
  textStyle,
  loading = false,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, loading && styles.disabledButton]}
      onPress={!loading ? onPress : undefined}
      disabled={loading}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
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
  disabledButton: {
    backgroundColor: colors.primaryLighter,
  },
});

export default CustomButton;
