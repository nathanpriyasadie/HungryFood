import React from 'react';
<<<<<<< HEAD
import {Router} from './src/navigations';

export default function App() {
  return <Router />;
=======
import {SafeAreaView} from 'react-native';
import {RegisterScreen} from './src/screens';

export default function App() {
  return (
    <SafeAreaView>
      <RegisterScreen />
    </SafeAreaView>
  );
>>>>>>> upstream/develop
}
