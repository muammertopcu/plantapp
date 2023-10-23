import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: Dimensions.get('window').height / 4,
    justifyContent: 'space-around',
  },
  smText: {
    marginVertical: 5,
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#13231B',
    fontWeight: '400',
    letterSpacing: 0.07,
  },
  text: {
    fontFamily: 'Rubik',
    fontSize: 24,
    color: '#13231B',
    fontWeight: '500',
    letterSpacing: 0.35,
  },
  searchContainer: {
    marginVertical: 14,
  },
  headerBg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    top: 0,
  },
});

export default styles;
