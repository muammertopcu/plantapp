import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 12,
  },
  bgImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 28,
    color: '#13231B',
    fontFamily: 'Rubik',
    letterSpacing: 0.07,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Rubik',
    lineHeight: 22,
    color: 'rgba(19, 35, 27, 0.70)',
    letterSpacing: 0.07,
    marginTop: 8,
    paddingHorizontal: 24,
  },
  bold: {
    fontWeight: '600',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  image: {
    flex: 1,
    width: '100%',
    objectFit: 'scale-down',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 11,
    fontFamily: 'Rubik',
    lineHeight: 15,
    color: 'rgba(89, 113, 101, .70)',
    letterSpacing: 0.07,
    marginHorizontal: 46,
    marginTop: 17,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default styles;
