import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {Text, TextProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  colors: string[];
  children: string;
}

const GradientText = ({colors, children, ...props}: GradientTextProps) => {
  return (
    <MaskedView maskElement={<Text {...props}>{children}</Text>}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
        <Text {...props}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
