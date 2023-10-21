import React from 'react';
import SelectItemCard from './SelectItemCard';
import {render} from '@testing-library/react-native';

describe('SelectItemCard unit test', () => {
  it('should be render correctly', () => {
    const wrapper = render(
      <SelectItemCard title={'test'} description={'test'} />,
    );

    expect(wrapper.getByTestId('SelectItemCard')).toBeDefined();
  });

  it('should be render with discount', () => {
    const wrapper = render(
      <SelectItemCard title={'test'} description={'test'} discount={50} />,
    );

    expect(wrapper.getByTestId('SelectItemCard')).toBeDefined();
    expect(wrapper.getByTestId('discountBadge')).toBeDefined();
  });

  it('should be render with selected', () => {
    const wrapper = render(
      <SelectItemCard title={'test'} description={'test'} selected={true} />,
    );

    expect(wrapper.getByTestId('SelectItemCard')).toBeDefined();
    expect(wrapper.getByTestId('circle').props.style[1].borderColor).toBe(
      '#28AF6E',
    );
  });

  it('should be render with selected and discount', () => {
    const wrapper = render(
      <SelectItemCard
        title={'test'}
        description={'test'}
        selected={true}
        discount={50}
      />,
    );

    expect(wrapper.getByTestId('SelectItemCard')).toBeDefined();
    expect(wrapper.getByTestId('circle').props.style[1].borderColor).toBe(
      '#28AF6E',
    );
    expect(wrapper.getByTestId('discountBadge')).toBeDefined();
  });
});
