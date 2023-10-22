import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Onboarding.styles';
import Swiper from 'react-native-swiper';
import {FirstStep, SecondStep} from './partials';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface OnboardingProps {
  navigation: NativeStackNavigationProp<any>;
}

const Onboarding = ({navigation}: OnboardingProps) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPress = () => {
    if (swiperRef.current && activeIndex !== 1) {
      swiperRef.current.scrollBy(activeIndex + 1);
    } else {
      navigation.navigate('Paywall');
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={setActiveIndex}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}>
        <FirstStep onPress={onPress} />
        <SecondStep onPress={onPress} />
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
