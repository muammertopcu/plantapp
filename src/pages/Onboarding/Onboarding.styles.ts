import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  dot: {
    backgroundColor: '#13231B40',
    width: 6,
    height: 6,
  },
  activeDot: {
    backgroundColor: '#13231B',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default styles;
