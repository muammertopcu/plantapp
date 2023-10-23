import React from 'react';
import {Image, Text, View} from 'react-native';
import {Searchbar} from '@components';
import styles from './Header.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.container, paddingTop: top, paddingBottom: top}}>
      <Image
        source={require('../../../../assets/images/headerbg.png')}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        style={styles.headerBg}
      />
      <View>
        <Text style={styles.smText}>Hi, plant lover!</Text>
        <Text style={styles.text}>Good Afternoon! ⛅</Text>
      </View>

      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
    </View>
  );
};

export default Header;
