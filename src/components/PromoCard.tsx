import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';

export interface PromoCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function PromoCard({
  title = '00',
  subtitle = '00',
  image = '00',
}: PromoCardProps) {
  return (
    <View style={styles.container}>
      <View />
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleText}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#E53735',
    borderRadius: 10,
    paddingBottom: 7,
    paddingTop: 11,
    paddingHorizontal: 15,
    color: '#FFD500',

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
  titleText: {
    color: '#FFD500',
    fontSize: 12,
  },
  timesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 60,
    includeFontPadding: false,
    color: '#F1BC31',
  },
});
