import {LogBox, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Navigation from './src/navigation';
import colors from './src/themes/colors';
const App = () => {
  if (__DEV__) LogBox.ignoreAllLogs(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
