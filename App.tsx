import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Navigation from './src/navigation';
import LoginScreen from './src/screens/login';
import SignUpScreen from './src/screens/signup';
import SplashScreen from './src/screens/splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from "./src/Constants";
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

const existingConfig = Amplify.getConfig();

Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      "FOB API": {
        endpoint: API_BASE_URL,
        region: 'us-east-2'
      }
    }
  }
});


export default function App() {
  const [authPage, setAuthPage] = useState("Login");
  const [signedIn, setSignedIn] = useState(false);
  const [token, setToken] = useState("");
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (token.length == 0) return;

    if (token != "none") {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
    setTimeout(() => {
      setSplashVisible(false);
    }, 2000);

  }, [token]);

  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('email');
      // If userToken exists, navigate to HomeScreen
      if (userToken !== null) {
        setToken(userToken);
      } else {
        setToken("none")
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      setSignedIn(false)
    }
  };

  return (
    <GluestackUIProvider config={config} globalStyles={styles.container}>
      {splashVisible ? <SplashScreen /> : signedIn ? <Navigation /> : authPage == "Login" ? <LoginScreen setAuthPage={setAuthPage} setSignedIn={setSignedIn}/> : <SignUpScreen setAuthPage={setAuthPage} setSignedIn={setSignedIn}/>}
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
