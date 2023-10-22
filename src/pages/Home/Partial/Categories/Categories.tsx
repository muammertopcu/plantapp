import {Alert, Dimensions, FlatList} from 'react-native';
import {CategoryCard, PremiumBox, SkeletonCard} from '@components';
import styles from '../../Home.styles';
import React, {Fragment} from 'react';
import {Category} from '@types';
import {useGetCategoriesQuery} from '../../../../store/api/categories';
import Questions from '../Questions';

const ListHeader = () => {
  return (
    <Fragment>
      <PremiumBox />
      <Questions />
    </Fragment>
  );
};

const Categories = () => {
  const {data, isLoading} = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <Fragment>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard
              key={index}
              width={Dimensions.get('window').width - 40}
              height={152}
              borderRadius={12}
              marginBottom={20}
              alignSelf={'center'}
              marginTop={20}
            />
          ))}
      </Fragment>
    );
  }

  const categories = data?.data as Category[];

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryCard
          data={item}
          onPress={() => Alert.alert(`${item.title} selected`)}
        />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      style={styles.listStyle}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={<ListHeader />}
      ListHeaderComponentStyle={styles.listHeader}
    />
  );
};

export default Categories;
