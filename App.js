import React from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from './Component/todo'
export default function App() {
  return (
    <View style={styles.container}>

      
    <Todo />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
