import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface CountdownCardProps {
  timeText?: string;
  unitText?: string;
}

export default function TimeCountdown({
  timeText,
  unitText,
}: CountdownCardProps) {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{timeText}</Text>
      <Text style={styles.unitText}>{unitText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timesContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeContainer: {
    alignItems: 'center',
  },
  unitText: {
    fontSize: 14,
    color: '#F1BC31',
  },
  timeText: {
    fontSize: 60,
    borderRadius: 5,
    paddingHorizontal: 7,
    backgroundColor: '#AB000D',
    includeFontPadding: false,
    color: '#F1BC31',
  },
});
