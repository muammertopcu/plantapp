import React from 'react';
import {ImageBackground, Pressable, Text} from 'react-native';
import {Category} from '@types';
import styles from './CategoryCard.styles';

interface CategoryCardProps {
  data: Category;
  onPress: () => void;
}

const CategoryCard = ({data, onPress}: CategoryCardProps) => {
  return (
    <Pressable
      testID={'CategoryCard'}
      onPress={onPress}
      style={styles.categoryCard}>
      <ImageBackground source={{uri: data.image.url}} imageStyle={styles.image}>
        <Text style={styles.title}>{data.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default CategoryCard;
