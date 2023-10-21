import React from 'react';
import {Text, View} from 'react-native';
import styles from './FeatureCard.styles';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const FeatureCard = ({title, subtitle, icon}: FeatureCardProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text testID={'title'} style={styles.title}>
        {title}
      </Text>
      <Text testID={'subtitle'} style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

export default FeatureCard;
