import React from 'react';
import { StyleSheet } from 'react-native';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Navigation from './src/navigation';

export default function App() {
  return (
    <GluestackUIProvider config={config} globalStyles={styles.container}>
      <Navigation/>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:'wrap',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
