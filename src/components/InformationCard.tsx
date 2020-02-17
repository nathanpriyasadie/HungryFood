import React from 'react';
import {View, StyleSheet, Image, Platform, ViewProps, Text} from 'react-native';

export interface InformationCardProps extends ViewProps {
  addressText?: string;
  balanceText?: string;
  pointsText?: string;
}

export default function InformationCard({
  addressText = 'undefined',
  balanceText = '0',
  pointsText,
  style,
  ...props
}: InformationCardProps) {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...props}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../assets/ovo.png')}
          style={styles.paymentIcon}
        />
        <View style={styles.leftTextContainer}>
          <Text style={styles.balanceText}>Rp. {balanceText}</Text>
          <Text style={styles.pointsText}>Points: {pointsText}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.currentLocationText}>Current location:</Text>
        <Text style={styles.addressText}>
          {addressText.length > 22
            ? addressText.substring(0, 21) + '...'
            : addressText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderColor: '#AB000D',
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,

    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#00000029',
        shadowOffset: {
          height: 0,
          width: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
      },
    }),
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  leftTextContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    marginLeft: 6,
    borderRightWidth: 1.5,
    borderColor: '#707070',
  },
  rightContainer: {
    flex: 1,
    marginLeft: 11.5,
  },
  balanceText: {
    fontSize: 12,
    includeFontPadding: false,
  },
  pointsText: {
    fontSize: 11,
    color: '#929292',
    includeFontPadding: false,
  },
  currentLocationText: {
    fontSize: 11,
    includeFontPadding: false,
  },
  addressText: {
    fontSize: 12,
    includeFontPadding: false,
  },
  paymentIcon: {
    height: 24,
    width: 24,
    // backgroundColor: 'pink',
  },
});
