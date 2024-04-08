import React, { useEffect, useRef, useState } from "react";
import { Animated, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText, Spinner } from "@gluestack-ui/themed";
import { userSignUp } from "../../services/auth/AuthenticationService";
import { SignupRequest } from "../../models/SignupRequest";
import { saveData } from "../../services/utils/Storage";

type SignUpScreenProps = {
  setAuthPage: any;
  setSignedIn: any;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ setAuthPage, setSignedIn }: SignUpScreenProps) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRePassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [industry, setIndustry] = useState('');
  const [triggerTime, setTriggerTime] = useState('');
  const [signupRequest, setSignUpRequest] = useState<SignupRequest>(null as unknown as SignupRequest);
  const [response, isLoading, error] = userSignUp(triggerTime, signupRequest);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (!error) return;
    console.warn(error.message);
  }, [error])

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
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }
    ).start();
  }, []);

  const onSignUpPress = () => {
    if (fullName.length == 0) {
      console.warn("Please enter your full name.")
      return;
    }
    if (password.length == 0) {
      console.warn("Please enter password");
      return;
    }
    if (password != repPassword) {
      console.warn("Passwords dont match.");
      return;
    }
    if (emailAddress.length == 0 || !emailAddress.toLowerCase().endsWith('edu')) {
      console.warn("Please enter valid school email.")
      return;
    }
    setSignUpRequest({
      email: emailAddress,
      password: password,
      fullName: fullName,
      industry: industry,
    })
    const newTime = new Date();
    setTriggerTime(newTime.toISOString());
  }

  const onTermsOfUsePress = () => {
    console.warn('Terms of Use');
  }

  const onPrivacyPress = () => {
    console.warn('Privacy Policy');
  }

  const onSignInPress = () => {
    setAuthPage("Login");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}>
      <Animated.ScrollView style={{ backgroundColor: 'white', height: '100%', opacity: fadeAnim }}>
        <View style={[styles.root, { paddingTop: height * 0.3 }]}>
          <Text style={styles.title}>Create Account</Text>
          <View style={{ width: '95%' }}>
            <CustomInput
              placeholder="Full Name"
              value={fullName}
              setValue={setFullName}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={{ width: '66%' }}>
              <CustomInput
                placeholder="Email Address"
                value={emailAddress}
                setValue={setEmailAddress}
              />
            </View>
            <View style={{ width: '30%' }}>
              <CustomInput
                placeholder="Industry"
                value={industry}
                setValue={setIndustry}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={{ width: '48%' }}>
              <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
              />
            </View>
            <View style={{ width: '48%' }}>
              <CustomInput
                placeholder="Repeat Password"
                value={repPassword}
                setValue={setRePassword}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onPress={onPrivacyPress}>Privacy Policy</Text>
          </Text>
          {!isLoading && <Button style={styles.signupButton} onPress={onSignUpPress} >
            <ButtonText>Register</ButtonText>
          </Button>}
          {isLoading && <Spinner color={'#788BFF'} />}
          <View style={styles.haveAccountContainer}>
            <Text style={styles.haveAccountText}>Have an account?</Text>
            <Pressable onPress={onSignInPress}><Text style={styles.link}>Sign in</Text></Pressable>
          </View>
        </View>
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 50,
    color: "#5465ff"
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#788BFF',
    fontSize: 14
  },
  signupButton: {
    width: 'auto',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#788BFF',
  },
  haveAccountContainer: {
    flexDirection: "row",
    paddingVertical: 14
  },
  haveAccountText: {
    fontSize: 14,
    paddingRight: 5
  }
})

export default SignUpScreen;