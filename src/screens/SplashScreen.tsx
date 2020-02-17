import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.title}>Hungry</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#E13634',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {},
  logo: {
    width: 143,
    height: 143,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
