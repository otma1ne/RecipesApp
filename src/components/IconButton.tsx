import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';

type IconButtonProps = {
  icon?: string;
  onPress: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
  iconStyle?: TextStyle;
  children?: React.ReactNode;
};

const IconButton = ({
  icon,
  onPress,
  size = 24,
  color = '#fff',
  style,
  iconStyle,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...props}>
      {icon && (
        <Ionicons name={icon} size={size} color={color} style={iconStyle} />
      )}
      {children}
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
