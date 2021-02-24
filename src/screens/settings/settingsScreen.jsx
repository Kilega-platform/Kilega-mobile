import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return ( 
    <SafeAreaView style={styles.root}>
      <Text>Settings Screen</Text>
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
 
export default SettingsScreen;