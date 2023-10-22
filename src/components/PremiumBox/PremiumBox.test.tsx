import React from 'react';
import {render} from '@testing-library/react-native';
import PremiumBox from './PremiumBox';

describe('PremiumBox', () => {
  it('should be rendered correctly', () => {
    const wrapper = render(<PremiumBox />);

    expect(wrapper.getByTestId('premium-box')).toBeDefined();
  });
});
