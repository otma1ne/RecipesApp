import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import {LOGIN_API, GET_USER_API} from '../constants/endpoints';

// Define the type for user data
interface User {
  id: string;
  username: string;
  firstName?: string;
  lastName: string;
  email?: string;
  image?: string;
  gender?: string;
}

// Define the AuthContext type
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (
    username: string,
    password: string,
  ) => Promise<{success: boolean; message?: string}>;
  logout: () => Promise<void>;
  getUserInfo: () => Promise<void>;
}

// Create the AuthContext with default values
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  token: null,
  login: async () => ({success: false}),
  logout: async () => {},
  getUserInfo: async () => {},
});

// AuthProvider component to wrap around your app
export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Load token and user data from AsyncStorage on app start
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log('Error loading auth state:', error);
      }
    };

    loadAuthState();
  }, []);

  // Login method
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(Config.BASE_URL + LOGIN_API, {
        username,
        password,
        expiresInMins: 30, // Optional
      });

      if (response.status === 200) {
        const {accessToken, ...userData} = response.data;

        setToken(accessToken);
        setUser(userData);
        setIsAuthenticated(true);

        // Store token and user data in AsyncStorage
        await AsyncStorage.setItem('token', accessToken);
        await AsyncStorage.setItem('user', JSON.stringify(userData));

        return {success: true};
      } else {
        return {success: false, message: 'Login failed'};
      }
    } catch (error: any) {
      console.log('Login Error:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'An error occurred',
      };
    }
  };

  // Logout method
  const logout = async () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);

    // Remove token and user data from AsyncStorage
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  };

  // Get user info method
  const getUserInfo = async () => {
    try {
      if (token) {
        const response = await axios.get(Config.BASE_URL + GET_USER_API, {
          headers: {Authorization: `Bearer ${token}`},
        });

        if (response.status === 200) {
          const userData = response.data;

          // Update state and store the new user info
          setUser(userData);
          await AsyncStorage.setItem('user', JSON.stringify(userData));
        }
      }
    } catch (error) {
      console.log('Error fetching user info:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{isAuthenticated, user, token, login, logout, getUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
