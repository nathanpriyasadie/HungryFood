import React from 'react';
import {TextInputProps, TextInput, StyleSheet} from 'react-native';

export interface InputProps extends TextInputProps {}

export default function Input({style, ...props}: InputProps) {
  return (
    <TextInput
      {...props}
      style={StyleSheet.flatten([styles.inputBox, style])}
    />
  );
}

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    paddingLeft: 10,
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#AB000D',
  },
});
