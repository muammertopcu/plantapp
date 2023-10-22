import React, {useState} from 'react';
import {Alert, FlatList, Image, Pressable, Text, View} from 'react-native';
import {Button, FeatureCard, SelectItemCard} from '@components';
import {Close, Herbal, Scanner, Speedometer} from '@icons';
import styles from './Paywall.styles';
import {useDispatch} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {setOnboardingStatus} from '../../store/slices/onboardingSlice';
import {AppDispatch} from '../../store/store';

const features = [
  {title: 'Unlimited', subtitle: 'plant identify', icon: <Scanner />},
  {title: 'Faster', subtitle: 'Process', icon: <Speedometer />},
  {title: 'Detailed', subtitle: 'Plant care', icon: <Herbal />},
];

const items = [
  {
    title: '1 Month',
    description: '$2.99/month, auto renewable',
    selected: false,
    discount: null,
  },
  {
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    selected: true,
    discount: 50,
  },
];

interface PaywallProps {
  navigation: NativeStackNavigationProp<any>;
}

const Paywall = ({navigation}: PaywallProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectItem, setSelectItem] = useState(items);

  const onPressSelectItem = (index: number) => {
    const newItems = [...selectItem];
    newItems.forEach(x => (x.selected = false));
    newItems[index].selected = true;
    setSelectItem(newItems);
  };

  const onPress = () => {
    const selectedItem = selectItem.find(x => x.selected);
    Alert.alert('Your Subscription', selectedItem?.title || '');
  };

  const closeHandler = () => {
    dispatch(setOnboardingStatus(false));
    navigation.navigate('MainNavigator');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeIcon} onPress={closeHandler}>
        <Close />
      </Pressable>

      <Image
        source={require('../../assets/images/paywall.png')}
        style={styles.image}
        resizeMode={'cover'}
        resizeMethod={'scale'}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.bold}>PlantApp</Text> Premium
        </Text>

        <Text style={styles.subtitle}>Access All Features</Text>

        <FlatList
          contentContainerStyle={styles.features}
          horizontal={true}
          data={features}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <FeatureCard {...item} />}
        />

        <View style={styles.selectWrapper}>
          {selectItem.map((item, index) => {
            return (
              <SelectItemCard
                key={index}
                title={item.title}
                description={item.description}
                selected={item.selected}
                onPress={() => onPressSelectItem(index)}
                discount={item.discount}
              />
            );
          })}
        </View>

        <View style={styles.footer}>
          <Button text={'Try free for 3 days'} onPress={onPress} />

          <Text style={styles.legalText}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable.
          </Text>

          <Text style={styles.termText}>Terms • Privacy • Restore</Text>
        </View>
      </View>
    </View>
  );
};

export default Paywall;
