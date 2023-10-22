import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Searchbar} from '@components';
import styles from './Header.styles';

const Header = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../../assets/images/headerbg.png')}>
      <Text style={styles.smText}>Hi, plant lover!</Text>
      <Text style={styles.text}>Good Afternoon! ⛅</Text>

      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
    </ImageBackground>
  );
};

export default Header;
