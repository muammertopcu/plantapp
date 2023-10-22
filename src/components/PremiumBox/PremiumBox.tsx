import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './PremiumBox.styles';
import {Arrow, Mail} from '@icons';
import GradientText from '../GradientText';

const PremiumBox = () => {
  return (
    <Pressable style={styles.container} testID={'premium-box'}>
      <View>
        <Mail />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
      </View>

      <View style={styles.content}>
        <GradientText
          children={'Free Premium Available'}
          colors={['#E5C990', '#E4B046']}
          style={styles.title}
        />
        <GradientText
          children={'Tap to upgrade your account!'}
          colors={['#E5C990', '#E4B046']}
          style={styles.text}
        />
      </View>

      <Arrow />
    </Pressable>
  );
};

export default PremiumBox;
