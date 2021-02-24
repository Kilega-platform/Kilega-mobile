import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const HymnScreen = () => {
  return ( 
    <SafeAreaView style={styles.root}>
      <Text>Hymn Screen</Text>
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
 
export default HymnScreen;