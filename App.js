import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import Form from './src/components/Form';
import Constants from 'expo-constants'


export default function App() {

  return (
    <View 
    style={styles.container}
    >
     <Form />
    
      {/* <StatusBar style="auto" ></StatusBar> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#9ec2e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
