import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Searchbar} from '@components';

describe('Searchbar unit tests', () => {
  it('should render correctly', () => {
    const wrapper = render(<Searchbar />);

    expect(wrapper.getByTestId('Searchbar')).toBeDefined();
  });

  it('should render with props', () => {
    const wrapper = render(<Searchbar placeholder={'test'} />);

    expect(wrapper.getByTestId('Searchbar')).toBeDefined();
    expect(wrapper.getByPlaceholderText('test')).toBeDefined();
  });

  it('should trigger onChangeText', () => {
    const onChange = jest.fn();
    const wrapper = render(<Searchbar onChangeText={onChange} />);
    const input = wrapper.getByTestId('input');

    fireEvent(input, 'onChangeText', 'test');

    expect(onChange).toHaveBeenCalledWith('test');
  });
});
