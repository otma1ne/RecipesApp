import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../theme/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

type IconButtonProps = {
  icon: string;
  onPress: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
  iconStyle?: TextStyle;
};

const IconButton = ({
  icon,
  onPress,
  size = 24,
  color = '#fff',
  style,
  iconStyle,
  ...props
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...props}>
      <FontAwesome5Icon
        name={icon}
        size={size}
        color={color}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: 60,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
