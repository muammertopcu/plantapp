import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listStyle: {
    paddingHorizontal: 24,
    height: Dimensions.get('window').height - 200,
  },
  columnWrapper: {
    gap: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 30,
  },
  listHeader: {
    paddingBottom: 20,
  },
});

export default styles;
