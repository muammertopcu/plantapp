import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button = ({text, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} testID={'button'} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
