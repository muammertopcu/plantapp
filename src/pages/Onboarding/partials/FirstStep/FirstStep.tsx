import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './FirstStep.styles';
import {BrushText, Button} from '@components';

interface FirstStepProps {
  onPress: () => void;
}

const FirstStep = ({onPress}: FirstStepProps) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../../assets/images/onboarding-bg-1.png')}>
      <Text style={styles.title}>
        Take a photo to <BrushText text={'identify'} /> the plant!
      </Text>

      <Image
        source={require('../../../../assets/images/onboarding1.png')}
        style={styles.onboardingImage}
      />

      <View style={styles.button}>
        <Button text={'Continue'} onPress={onPress} />
      </View>
    </ImageBackground>
  );
};

export default FirstStep;
