import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView>
        <LoginScreen/>
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
