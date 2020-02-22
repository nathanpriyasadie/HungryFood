import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Input} from '../components';

export default function RegisterScreen({navigation}) {
  const [refInputEmail, setRefInputEmail] = useState<TextInput>();
  const [refInputPhone, setRefInputPhone] = useState<TextInput>();
  const [refInputPass, setRefInputPass] = useState<TextInput>();
  const [refInputConfPass, setRefInputConfPass] = useState<TextInput>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.title}>Hungry</Text>
      <Input
        placeholder="Username"
        onSubmitEditing={() => refInputEmail?.focus()}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <Input
        placeholder="Email"
        onSubmitEditing={() => refInputPhone?.focus()}
        refInput={instance => instance && setRefInputEmail(instance)}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <Input
        placeholder="Phone Number"
        onSubmitEditing={() => refInputPass?.focus()}
        refInput={instance => instance && setRefInputPhone(instance)}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onSubmitEditing={() => refInputConfPass?.focus()}
        refInput={instance => instance && setRefInputPass(instance)}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry
        refInput={instance => instance && setRefInputConfPass(instance)}
      />
      <View style={styles.bottomContainer}>
        <Text>Already have an account? Login</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            GO!
          </Text>
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
  bottomContainer: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
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
