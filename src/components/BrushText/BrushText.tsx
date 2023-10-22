import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './BrushText.styles';

interface BrushTextProps {
  text: string;
}

const BrushText = ({text}: BrushTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image
        source={require('../../assets/images/brush.png')}
        style={styles.brush}
      />
    </View>
  );
};

export default BrushText;
