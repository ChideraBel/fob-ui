import { View, StyleSheet, useWindowDimensions, KeyboardAvoidingView, Text, Platform, Pressable, Animated } from "react-native";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText, Divider, Modal, Spinner } from "@gluestack-ui/themed";
import React, { useEffect, useRef, useState } from "react";
import { userLogin } from "../../services/auth/AuthenticationService";
import IconButton from "../../components/IconButton";
import Google from "assets/google-icon.png";
import Outlook from "assets/outlook-icon.png";
import { saveData } from "../../services/utils/Storage";

type LoginScreenProps = {
  setAuthPage: any;
  setSignedIn: any;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ setAuthPage, setSignedIn }: LoginScreenProps) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [triggerTime, setTriggerTime] = useState('');
  const [response, isLoading, error] = userLogin(triggerTime, emailAddress, password);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { height } = useWindowDimensions();

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 450, 
        useNativeDriver: true,
      }
    ).start();
  }, []);

  //TODO: add modals for error messages and clean up
  useEffect(() => {
    if (!response) return;
    console.log(response);

    if (response.responseType == "SUCCESS") {
      saveData("email", emailAddress);
      setSignedIn(true);
    } else {
      console.log(response.message);
    }

  }, [response])

  useEffect(() => {
    if (!error) return;
    console.log(error.message);
  }, [error])

  const onSignInPress = () => {
    const trigger = new Date();
    setTriggerTime(trigger.toISOString());
  }

  const onSignUpPress = () => {
    setAuthPage("Signup")
  }

  const onSSOPressed = (type: string) => {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Animated.ScrollView style= {{backgroundColor: 'white', height:'100%', opacity: fadeAnim}}>
        <View style={[styles.root, {paddingTop: height * 0.42}]}>
          <CustomInput
            placeholder="Email Address"
            value={emailAddress}
            setValue={setEmailAddress}
            secureTextEntry={false}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          {!isLoading && <Button style={styles.loginButton} onPress={onSignInPress}>
            <ButtonText>Log in</ButtonText>
          </Button>}
          {isLoading && <Spinner color={'#788BFF'}/>}
          <Pressable style={{ paddingTop: 10 }}><Text style={styles.link}>Forgot password?</Text></Pressable>
          <View style={styles.signupContainer}>
            <Text style={styles.newUser}>New user?</Text>
            <Pressable onPress={onSignUpPress}><Text style={styles.link}>Register here!</Text></Pressable>
          </View>
        </View>
        <View style={styles.footer}>
          <Divider style={styles.divider}></Divider>
          <View style={styles.iconContainer}>
            <IconButton onPress={() => onSSOPressed("Google")} icon={Google} />
            <IconButton onPress={() => onSSOPressed("Outlook")} icon={Outlook} />
          </View>
        </View>
        {error && <Modal>{error.message}</Modal>}
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingHorizontal: 100,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: 40,
    width: '70%',
    maxWidth: 300,
  },
  loginButton: {
    width: 'auto',
    borderRadius: 10,
    backgroundColor: '#788BFF',
  },
  link: {
    color: '#788BFF',
    fontSize: 15
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 30
  },
  newUser: { 
    fontSize: 15, 
    paddingRight: 5 
  },
  signupContainer: { 
    flexDirection: "row", 
    paddingVertical: 14 
  },
  divider: { 
    height: 1.2, 
    backgroundColor: '#788BFF' 
  },
  iconContainer: { 
    flexDirection: 'row',
     paddingTop: 14 
  }
})

export default LoginScreen;