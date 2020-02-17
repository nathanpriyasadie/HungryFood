import React from 'react';
import {Text, StyleSheet} from 'react-native';

export interface ContainerTitleProps {
  title?: string;
}

export default function ContainerTitle({title}: ContainerTitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
