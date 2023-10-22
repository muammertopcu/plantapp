import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    height: 150,
    backgroundColor: '#F4F6F6',
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 0.5,
    borderRadius: 12,
    marginBottom: 11,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 4,
    shadowRadius: 1,
    elevation: 1,
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
