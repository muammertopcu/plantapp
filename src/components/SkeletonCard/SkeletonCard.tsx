import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ViewStyle} from 'react-native';

const SkeletonCard = ({...props}: ViewStyle) => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item {...props} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonCard;
