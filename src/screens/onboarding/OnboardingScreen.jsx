import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';
import theme from '../../theme';
import constants from '../../theme/constants';

import assets from '../../constants/assets';
import fonts from '../../theme/fonts';
import IconButton from '../../components/IconButton';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const titles = [
  {
    title: 'Cook and Share',
    text: 'Discover a world of recipes and share your culinary creations with friends and family.',
  },
  {
    title: 'Explore Delicious Recipes',
    text: 'Find inspiration for your next meal with our curated collection of recipes from around the globe.',
  },
  {
    title: 'Join Our Foodie Community',
    text: 'Connect with fellow food enthusiasts, exchange tips, and share your favorite recipes.',
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < titles.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    if (currentStep === titles.length - 1) {
      navigation.navigate('Login');
    }
  };

  const progressValue = (currentStep / (titles.length - 1)) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <View style={styles.overlay} />
        <Image source={assets.onboarding1} style={styles.img} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{titles[currentStep].title}</Text>
          <Text style={styles.text}>{titles[currentStep].text}</Text>
        </View>
      </View>
      <View style={styles.navigations}>
        <View style={styles.progressBar}>
          <View style={[styles.value, {width: `${progressValue}%`}]}></View>
        </View>
        <IconButton
          icon="chevron-forward-outline"
          onPress={handleNextStep}
          size={24}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    margin: constants.padding,
  },
  imgContainer: {
    flex: 1,
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: constants.borderRadius * 1.5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 0,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  textContainer: {
    padding: constants.padding * 1.5,
    paddingBottom: constants.padding * 3,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  title: {
    color: colors.white,
    fontSize: 46,
    fontFamily: fonts.semiBold,
    lineHeight: 50,
  },
  text: {
    color: colors.white,
    ...theme.text14,
  },
  navigations: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    position: 'relative',
    width: 100,
    height: 8,
    backgroundColor: colors.grey,
    borderRadius: constants.borderRadius,
    overflow: 'hidden',
  },
  value: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: constants.borderRadius,
  },
});
