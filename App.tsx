import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Navigation from './src/navigation';

export default function App() {
  return (
      <GluestackUIProvider config={config}>
        <SafeAreaView>
          <Navigation/>
        </SafeAreaView>
      </GluestackUIProvider>

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
