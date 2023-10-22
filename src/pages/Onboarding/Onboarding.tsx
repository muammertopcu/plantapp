import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Onboarding.styles';
import Swiper from 'react-native-swiper';
import {FirstStep, SecondStep} from './partials';

const Onboarding = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPress = () => {
    if (swiperRef.current && activeIndex !== 2) {
      swiperRef.current.scrollBy(1);
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
