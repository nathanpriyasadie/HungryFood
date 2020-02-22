import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export interface ButtonProps {
  title?: string;
}

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.addButtonContainer}>
      <Text style={styles.addbuttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#E53735',
    paddingVertical: 8,
  },
  addbuttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 14,
  },
});
