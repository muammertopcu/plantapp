import React from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';
import styles from './SelectItemCard.styles';

interface DiscountBadgeProps {
  discount: number;
}

const DiscountBadge = ({discount}: DiscountBadgeProps) => {
  return (
    <View testID={'discountBadge'} style={styles.discountBadge}>
      <Text style={styles.discountBadgeText}>Save {discount}%</Text>
    </View>
  );
};

interface SelectItemCardProps extends PressableProps {
  title: string;
  description: string;
  discount?: number;
  selected?: boolean;
}

const SelectItemCard = ({
  title,
  description,
  selected,
  discount,
  ...props
}: SelectItemCardProps) => {
  return (
    <Pressable
      style={[styles.container, selected && styles.container.active]}
      testID={'SelectItemCard'}
      {...props}>
      <View
        testID={'circle'}
        style={[styles.circle, selected && styles.circle.active]}
      />

      <View>
        <Text testID={'title'} style={styles.title}>
          {title}
        </Text>
        <Text testID={'description'} style={styles.description}>
          {description}
        </Text>
      </View>

      {discount && <DiscountBadge discount={discount} />}
    </Pressable>
  );
};

export default SelectItemCard;
