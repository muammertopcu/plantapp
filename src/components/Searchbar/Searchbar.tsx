import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from './Searchbar.styles';
import {Search} from '@icons';

const Searchbar = ({...props}: TextInputProps) => {
  return (
    <View testID={'Searchbar'}>
      <TextInput testID={'input'} style={styles.searchbar} {...props} />
      <View style={styles.icon}>
        <Search />
      </View>
    </View>
  );
};

export default Searchbar;
