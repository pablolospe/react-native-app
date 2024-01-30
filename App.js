import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import Form from './src/components/Form';


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
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
