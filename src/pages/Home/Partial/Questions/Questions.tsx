import React from 'react';
import {useGetQuestionsQuery} from '../../../../store/api/categories';
import {FlatList, Text, View} from 'react-native';
import {Question} from '@types';
import {QuestionCard, SkeletonCard} from '@components';
import styles from './Questions.styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Questions = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {data, isLoading} = useGetQuestionsQuery();

  if (isLoading) {
    return (
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => (
          <SkeletonCard
            width={240}
            height={164}
            marginRight={20}
            borderRadius={12}
            marginTop={20}
          />
        )}
        horizontal={true}
      />
    );
  }

  const pressHandler = (uri: string) => {
    navigation.navigate('WebView', {uri});
  };

  const questions = data as Question[];

  return (
    <View>
      <Text style={styles.title}>Get Started</Text>
      <FlatList
        data={questions}
        horizontal={true}
        renderItem={({item}) => (
          <QuestionCard data={item} onPress={() => pressHandler(item.uri)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Questions;
