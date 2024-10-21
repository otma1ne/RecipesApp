import React, {useContext} from 'react';
import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import colors from '../../theme/colors';
import constants from '../../theme/constants';
import fonts from '../../theme/fonts';

interface SettingItemProps {
  icon: string;
  label: string;
  onPress: () => void;
}

// Reusable component for each setting item
function SettingItem({icon, label, onPress}: SettingItemProps) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Ionicons
        name={icon}
        size={24}
        color={colors.primary}
        style={styles.icon}
      />
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const {logout} = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      'Logout Confirmation',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Logout Cancelled'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => logout(),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* List of setting items */}
      <SettingItem
        icon="settings-outline"
        label="Settings"
        onPress={() => {}}
      />
      <SettingItem icon="help-circle-outline" label="FAQ" onPress={() => {}} />
      <SettingItem
        icon="information-circle-outline"
        label="About"
        onPress={() => {}}
      />
      <SettingItem
        icon="lock-closed-outline"
        label="Privacy Policy"
        onPress={() => {}}
      />

      {/* Logout item */}
      <SettingItem
        icon="log-out-outline"
        label="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: constants.padding,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
    marginBottom: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLighter,
  },
  icon: {
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
  },
});
