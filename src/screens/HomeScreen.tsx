import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topView}>
        <SearchBar placeholder="What do you want to eat right now?" />
        <Text style={styles.title}>Home Screen</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  topView: {
    backgroundColor: '#E53735',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
