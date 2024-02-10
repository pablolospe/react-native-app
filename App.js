import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Form from './src/components/Form';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/bg-img.jpg')}
        style={styles.image}
      >
        <Form />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent: "center"
  },
});
