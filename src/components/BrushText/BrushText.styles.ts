import {StyleSheet} from 'react-native';

const BrushTextStyles = StyleSheet.create({
  container: {
    transform: [{translateY: 8}],
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    color: '#13231B',
    fontFamily: 'Rubik',
    letterSpacing: 0.07,
    lineHeight: 36,
  },
  brush: {
    position: 'absolute',
    transform: [{translateX: -15}, {translateY: 30}],
  },
});

export default BrushTextStyles;
