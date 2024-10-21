import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';
import constants from '../../theme/constants';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../../context/AuthContext';
import fonts from '../../theme/fonts';
import InfoItem from '../detail/components/InfoItem';

export default function ProfileScreen() {
  const {user, getUserInfo} = useContext(AuthContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Text style={styles.title}>Profile</Text>
      {user ? (
        <>
          <View style={styles.userInfo}>
            <Image source={{uri: user?.image}} style={styles.circleAvatar} />
            <Text style={styles.name}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
          <View style={styles.rowInfo}>
            <InfoItem
              label="Recipes"
              value={24}
            />
            <InfoItem
              label="Following"
              value={458}
            />
            <InfoItem
              label="Followers"
              value={806}
            />
          </View>
        </>
      ) : (
        <Text style={styles.noUserText}>No user information available.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    padding: constants.padding,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  userInfo: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleAvatar: {
    margin: 'auto',
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.black,
    textAlign: 'center',
  },
  email: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.black,
    textAlign: 'center',
  },
  rowInfo: {
    paddingVertical: constants.padding,
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primaryLighter,
    borderRadius: constants.borderRadius,
  },
  noUserText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.red,
    marginTop: 20,
  },
});
