import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(40px)',
    paddingVertical: 13,
    paddingHorizontal: 16,
    margin: 16,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    active: {
      borderColor: '#28AF6E',
      borderWidth: 1,
    },
  },
  title: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'Rubik',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    marginRight: 12,
    active: {
      backgroundColor: '#FFF',
      borderColor: '#28AF6E',
      borderWidth: 7,
    },
  },
  discountBadge: {
    backgroundColor: '#28AF6E',
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  discountBadgeText: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default styles;
