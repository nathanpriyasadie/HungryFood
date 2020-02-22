import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function RadioButton({id, title, changeSelected, propsToggle}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => changeSelected(id)}>
      <View style={styles.outerCircle}>
        {propsToggle ? <View style={styles.innerCircle} /> : null}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    includeFontPadding: false,
    textAlign: 'center',
  },
  outerCircle: {
    borderColor: 'white',
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  innerCircle: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
