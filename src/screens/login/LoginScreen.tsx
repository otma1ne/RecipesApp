import {StyleSheet, Text, View} from 'react-native';
import constants from '../../theme/constants';
import CustomButton from '../../components/CustomButton';
import theme from '../../theme';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import CustomTextInput from '../../components/CustomTextInput';
import IconButton from '../../components/IconButton';
import useLogin from './useLogin';

import Google from '../../assets/icons/google.svg';
import Apple from '../../assets/icons/apple.svg';

export default function LoginScreen() {
  const {username, password, loading, handleLogin, setUsername, setPassword} =
    useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>
          Log in to access your saved recipes or sign in with a social account
          below.
        </Text>
        <View style={styles.form}>
          <CustomTextInput
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
            placeholder="Please enter your email"
            placeholderTextColor={colors.grey}
          />
          <CustomTextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Please enter your password"
            placeholderTextColor={colors.grey}
          />
        </View>
      </View>
      <View style={styles.actionsButton}>
        <CustomButton title="Login" onPress={handleLogin} loading={loading} />
        <View style={styles.actionsButtonRow}>
          <IconButton style={styles.iconButton} onPress={() => {}}>
            <Google width={24} />
          </IconButton>
          <IconButton style={styles.iconButton} onPress={() => {}}>
            <Apple width={24} />
          </IconButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 16,
    padding: constants.padding,
    paddingBottom: constants.padding * 2,
    backgroundColor: colors.white,
  },
  formContainer: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  title: {
    fontSize: 34,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  text: {
    marginTop: 16,
    ...theme.text14,
  },
  actionsButton: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  actionsButtonRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    flex: 1,
    borderRadius: constants.borderRadius,
    backgroundColor: '#fbdfd0',
  },
});
