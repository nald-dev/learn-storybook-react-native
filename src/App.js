import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Learn Storybook</Text>
      <Text style={styles.description}>
        On <Text style={styles.bold}>./src/App.js</Text>
      </Text>

      <Text style={styles.description}>
        Change
        <Text style={styles.bold}>{' isPreviewingStorybook '}</Text>
        to <Text style={[styles.highlightBlue, styles.bold]}>{'true'}</Text>, if
        you want to experimenting with your components
      </Text>

      <Text style={styles.description}>
        Change
        <Text style={styles.bold}>{' isPreviewingStorybook '}</Text>
        to <Text style={[styles.highlightRed, styles.bold]}>{'false'}</Text>, if
        you want to get back on the App
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  highlightBlue: {
    color: 'deepskyblue',
  },
  highlightRed: {
    color: 'red',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default App;
