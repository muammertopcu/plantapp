import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24201A',
    borderRadius: 12,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'rgba(232, 44, 19, 0.90)',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    lineHeight: 12,
  },
  content: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    color: '#FFDE9C',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: -0.32,
    fontFamily: 'SF Pro Text',
  },
  text: {
    color: '#FFDE9C',
    fontSize: 13,
    fontFamily: 'SF Pro Text',
  },
});

export default styles;
