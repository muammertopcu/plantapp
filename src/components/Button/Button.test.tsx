import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from './Button';

describe('Button unit tests', () => {
  it('should render correctly with text', () => {
    const wrapper = render(<Button text={'test'} />);

    expect(wrapper.getByText('test')).toBeDefined();
  });

  it('should click correctly', () => {
    const mockFn = jest.fn();
    const wrapper = render(<Button text={'test'} onPress={mockFn} />);
    const button = wrapper.getByTestId('button');

    fireEvent(button, 'onPress');
    expect(mockFn).toHaveBeenCalled();
  });
});
