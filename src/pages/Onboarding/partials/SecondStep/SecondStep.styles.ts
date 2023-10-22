import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  bold: {
    fontWeight: '800',
  },
  title: {
    fontSize: 28,
    color: '#13231B',
    fontFamily: 'Rubik',
    letterSpacing: 0.07,
    lineHeight: 36,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Rubik',
    lineHeight: 22,
    color: 'rgba(19, 35, 27, 0.70)',
    letterSpacing: 0.07,
    marginTop: 8,
  },
  images: {
    flex: 2,
    marginTop: 80,
  },
  onboardingImage: {
    flex: 2,
    resizeMode: 'contain',
  },
  artwork: {
    position: 'absolute',
    top: -60,
    right: 0,
  },
  button: {
    position: 'absolute',
    bottom: 62,
    left: 24,
    right: 24,
    zIndex: 2,
  },
  gradient: {
    zIndex: 2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
