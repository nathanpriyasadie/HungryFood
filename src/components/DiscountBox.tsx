import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StyleProp,
  TextStyle,
} from 'react-native';

export type DiscountBoxType = 'all-dishes' | 'food-only' | 'beverage-only';

export interface DiscountBoxProps {
  discountPercentage: number;
  boxSize?: number;
  discountType?: DiscountBoxType;
  style: StyleProp<TextStyle>;
}

export default function DiscountBox({
  discountPercentage,
  boxSize = 50,
  discountType = 'beverage-only',
  style,
}: DiscountBoxProps) {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {height: boxSize, width: boxSize, borderRadius: boxSize / 3},
        style,
      ])}>
      <View style={styles.percentageContainer}>
        <Text
          style={StyleSheet.flatten([
            styles.percentage,
            {fontSize: boxSize * 1.15},
          ])}>
          %
        </Text>
      </View>
      <View style={styles.percentageContainer}>
        <Text
          style={StyleSheet.flatten([
            styles.percentNumber,
            {fontSize: boxSize / 1.4},
          ])}>
          {discountPercentage}
        </Text>
      </View>
      <Text
        style={StyleSheet.flatten([styles.discType, {fontSize: boxSize / 10}])}>
        {discountType}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    backgroundColor: '#B22222',
    paddingBottom: 6,
    alignItems: 'center',
  },
  percentageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    color: 'rgba(241, 188, 49, 0.25)',
  },
  percentNumber: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#e0a916',
    includeFontPadding: false,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#00000029',
        shadowOffset: {height: 0, width: 7},
        shadowOpacity: 1,
        shadowRadius: 6,
      },
    }),
  },
  discType: {
    fontSize: 14,
    color: '#EDB430',
  },
});
