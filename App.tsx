import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
