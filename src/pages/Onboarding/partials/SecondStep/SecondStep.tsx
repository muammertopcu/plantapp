import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './SecondStep.styles';
import {BrushText, Button} from '@components';
import LinearGradient from 'react-native-linear-gradient';

interface FirstStepProps {
  onPress: () => void;
}

const SecondStep = ({onPress}: FirstStepProps) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../../assets/images/onboarding-bg-2.png')}>
      <Text style={styles.title}>
        Get plant <BrushText text={'care guides'} />
      </Text>

      <LinearGradient
        locations={[0, 0.7, 0.9]}
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0)', '#ffffff']}
        style={styles.gradient}
      />

      <ImageBackground
        source={require('../../../../assets/images/onboarding2.png')}
        style={styles.images}
        imageStyle={styles.onboardingImage}>
        <Image
          source={require('../../../../assets/images/artwork.png')}
          style={styles.artwork}
        />
      </ImageBackground>

      <View style={styles.button}>
        <Button text={'Continue'} onPress={onPress} />
      </View>
    </ImageBackground>
  );
};

export default SecondStep;
