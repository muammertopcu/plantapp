import {Platform, StyleSheet} from 'react-native';

const BrushTextStyles = StyleSheet.create({
  container: {
    transform: [
      {translateX: Platform.OS === 'ios' ? 25 : 0},
      {translateY: Platform.OS === 'ios' ? 3 : 10},
    ],
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
