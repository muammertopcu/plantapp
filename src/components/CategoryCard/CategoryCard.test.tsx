import React from 'react';
import {CategoryCard} from '@components';
import {fireEvent, render} from '@testing-library/react-native';
import category from './../../../__mocks__/category.json';
import {Category} from '@types';

const catData = category as Category;

describe('CategoryCard unit tests', () => {
  it('should render correctly', () => {
    const wrapper = render(<CategoryCard data={catData} onPress={() => {}} />);

    expect(wrapper.getByTestId('CategoryCard')).toBeDefined();
  });

  it('should trigger onPress', () => {
    const onPress = jest.fn();
    const wrapper = render(<CategoryCard data={catData} onPress={onPress} />);
    const card = wrapper.getByTestId('CategoryCard');

    fireEvent.press(card, 'onPress');

    expect(onPress).toHaveBeenCalled();
  });
});
