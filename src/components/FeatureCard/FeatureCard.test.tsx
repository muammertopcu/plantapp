import React from 'react';
import {render} from '@testing-library/react-native';
import FeatureCard from './FeatureCard';
import {Scanner} from '@icons';

describe('FeatureCard unit tests', () => {
  it('should render with props', () => {
    const wrapper = render(
      <FeatureCard title={'test'} subtitle={'test'} icon={<Scanner />} />,
    );

    expect(wrapper.getByTestId('title')).toBeDefined();
    expect(wrapper.getByTestId('subtitle')).toBeDefined();
    expect(wrapper.getByTestId('ScannerIcon')).toBeDefined();
  });
});
