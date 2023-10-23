import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101E17',
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
  },
  content: {
    position: 'absolute',
    bottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Rubik',
    paddingHorizontal: 24,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, .70)',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.38,
    paddingHorizontal: 24,
  },
  features: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  selectWrapper: {
    paddingHorizontal: 10,
    paddingTop: '.5%',
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  legalText: {
    color: 'rgba(255, 255, 255, .52)',
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 0.38,
    fontWeight: '300',
    textAlign: 'center',
    paddingTop: 8,
  },
  termText: {
    color: 'rgba(255, 255, 255, .50)',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
    paddingTop: 10,
  },
  closeIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 40,
    right: 24,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  bold: {
    fontWeight: '800',
  },
});

export default styles;
