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
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [employment, setEmployment] = useState('');
  const [address, setAddress] = useState('');
  const [industry, setIndustry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
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
    if(fullName.length == 0) {
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
      console.warn("Please enter valid insitution email.")
      return;
    }
    setSignUpRequest({
      email: emailAddress,
      password: password,
      fullName: fullName,
      address: `${address}, ${city}, ${state}, ${zipcode}`,
      employment: employment,
      industry: industry,
      nationality: nationality,
      phoneNumber: phoneNumber,
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
        <View style={[styles.root, { padding: height * 0.09 }]}>
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
                placeholder="Phone"
                value={phoneNumber}
                setValue={setPhoneNumber}
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
          <View style={{ width: '95%' }}>
            <CustomInput
              placeholder="Address"
              value={address}
              setValue={setAddress}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={{ width: '52%' }}>
              <CustomInput
                placeholder="City"
                value={city}
                setValue={setCity}
              />
            </View>

            <View style={{ width: '15%' }}>
              <CustomInput
                placeholder="State"
                value={state}
                setValue={setState}
                centerText={true}
              />
            </View>

            <View style={{ width: '20%' }}>
              <CustomInput
                placeholder="Zip"
                value={zipcode}
                setValue={setZipcode}
                centerText={true}
              />
            </View>
          </View>
          <View style={{ width: '95%' }}>
            <CustomInput
              placeholder="Nationality"
              value={nationality}
              setValue={setNationality}
            />
            <CustomInput
              placeholder="Employment"
              value={employment}
              setValue={setEmployment}
            />
            <CustomInput
              placeholder="Industry"
              value={industry}
              setValue={setIndustry}
            />
          </View>
          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onPress={onPrivacyPress}>Privacy Policy</Text>
          </Text>
          {!isLoading && <Button style={styles.signupButton} onPress={onSignUpPress} >
            <ButtonText>Register</ButtonText>
          </Button> }
          {isLoading && <Spinner color={'#788BFF'}/>}
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
    marginBottom: 30,
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