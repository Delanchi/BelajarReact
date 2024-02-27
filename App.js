import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';

export default function App() {
  const [title, setTitle] = useState(``)

  return (
    <View style={styles.body}>
      <ScrollView>
        {/* Shift + alt + arrow down */}
        <Text>Hallo Dunia</Text>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}onPress={()}
      </ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
