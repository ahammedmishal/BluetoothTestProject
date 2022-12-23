import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BluetoothScanner from './src/BluetoothScanner';
import { LogBox } from 'react-native';
const App = () => {
  return (
  <View style={styles.container}>
    <BluetoothScanner/>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  }
});


LogBox.ignoreAllLogs();//Ignore all log notifications

export default App;