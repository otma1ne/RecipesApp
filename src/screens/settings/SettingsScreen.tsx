import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

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

      {/* Other settings options can go here */}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    // justifyContent: 'center', // Optionally center the content
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FF3B30', // A red color to indicate logout
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
