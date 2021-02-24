import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  return ( 
    <SafeAreaView style={styles.root}>
        <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    justifyContent: "center",
    alignItems:"center",
    flex: 1
  }
}) 
 
export default HomeScreen;