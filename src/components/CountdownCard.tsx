import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';
import TimeCountdown from './TimeCountdown';

export interface CountdownCardProps {
  hoursText?: string;
  minutesText?: string;
  secondsText?: string;
}

export default function CountdownCard({
  hoursText = '00',
  minutesText = '00',
  secondsText = '00',
}: CountdownCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promo shifts in:</Text>
      <View style={styles.timesContainer}>
        <TimeCountdown timeText={hoursText} unitText="hours" />
        <Text style={styles.timeText}>:</Text>
        <TimeCountdown timeText={minutesText} unitText="minutes" />
        <Text style={styles.timeText}>:</Text>
        <TimeCountdown timeText={secondsText} unitText="seconds" />
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
  title: {
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
