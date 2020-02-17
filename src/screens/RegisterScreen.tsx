import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Input} from '../components';

export default function RegisterScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.title}>Hungry</Text>
      <Input placeholder="Username" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />
      <View style={styles.containerBottom}>
        <Text>Already have an account? Login</Text>
        <TouchableOpacity>
          <Text style={styles.button}>GO!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  containerBottom: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#AB000D',
  },
  button: {
    margin: 15,
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: '#AB000D',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
});
