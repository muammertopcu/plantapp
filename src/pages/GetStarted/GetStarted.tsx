import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {Button} from '@components';
import styles from './GetStarted.styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface GetStartedProps {
  navigation: NativeStackNavigationProp<any>;
}

const GetStarted = ({navigation}: GetStartedProps) => {
  const goToOnboarding = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/get-started-bg.png')}
      style={styles.wrapper}>
      <Text style={styles.title}>
        Welcome to <Text style={styles.bold}>PlantApp</Text>
      </Text>

      <Text style={styles.subtitle}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>

      <Image
        source={require('../../assets/images/get-started.png')}
        style={styles.image}
      />

      <View style={styles.footer}>
        <Button text={'Get Started'} onPress={goToOnboarding} />

        <Text style={styles.footerText}>
          By tapping next, you are agreeing to PlantID{' '}
          <Text style={styles.underline}>Term of Use</Text> &{' '}
          <Text style={styles.underline}>Privacy Policy</Text>.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
