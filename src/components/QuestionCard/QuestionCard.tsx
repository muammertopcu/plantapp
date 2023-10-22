import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import {Question} from '@types';
import styles from './QuestionCard.styles';

interface QuestionCardProps {
  data: Question;
  onPress?: () => void;
}

const QuestionCard = ({data, onPress}: QuestionCardProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: data.image_uri}} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

export default QuestionCard;
