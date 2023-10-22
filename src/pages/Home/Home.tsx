import React from 'react';
import {SafeAreaView} from 'react-native';
import {Categories, Header} from './Partial';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Categories />
    </SafeAreaView>
  );
};

export default Home;
