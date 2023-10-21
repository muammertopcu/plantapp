import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categoryCard: {
    flex: 0.5,
    maxWidth: Dimensions.get('window').width / 2 - 16,
    height: 150,
    backgroundColor: '#F4F6F6',
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 0.5,
    borderRadius: 12,
    marginBottom: 11,
  },
  image: {
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
    marginLeft: 16,
    textTransform: 'capitalize',
    width: '50%',
  },
});

export default styles;
