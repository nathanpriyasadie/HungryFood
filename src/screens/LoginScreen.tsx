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

export default function LoginScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.title}>Hungry</Text>
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry />
      <View style={styles.containerBottom}>
        <Text>New Here? Register</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Register')}>
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
    marginTop: 200,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#AB000D',
  },
  buttonContainer: {
    margin: 15,
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: '#AB000D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
});
