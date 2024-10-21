import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {StyleSheet, View} from 'react-native';
import colors from '../theme/colors';
import SearchScreen from '../screens/search/SearchScreen';
import fonts from '../theme/fonts';
import SavedScreen from '../screens/saved/SavedScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            let iconName: string = 'home';
            const iconSize = 22;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,
          tabBarStyle: [styles.tabBar, styles.tabBarWithRadius],
          tabBarLabelStyle: styles.tabBarLabel,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabBar: {
    backgroundColor: colors.secondary,
    paddingTop: 8,
    paddingBottom: 10,
    height: 70,
  },
  tabBarWithRadius: {
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: fonts.medium,
    paddingBottom: 5,
  },
});
