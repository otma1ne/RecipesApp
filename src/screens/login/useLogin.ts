import {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

const useLogin = () => {
  const {login} = useContext(AuthContext);

  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    setLoading(true);

    const result = await login(username, password);

    setLoading(false);

    if (result.success) {
      // Navigation is handled by AuthContext and StackNavigator
    } else {
      Alert.alert('Login Failed', result.message);
    }
  };

  return {
    username,
    password,
    loading,
    handleLogin,
    setUsername,
    setPassword,
  };
};

export default useLogin;
