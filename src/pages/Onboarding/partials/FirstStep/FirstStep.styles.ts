import {StyleSheet} from 'react-native';

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
  onboardingImage: {
    flex: 2,
    width: '100%',
    objectFit: 'scale-down',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 62,
    left: 24,
    right: 24,
  },
});

export default styles;
