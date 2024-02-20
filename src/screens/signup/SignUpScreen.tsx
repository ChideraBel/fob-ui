import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText } from "@gluestack-ui/themed";

const SignUpScreen = () => {
  const [emailAddress, setEmailAddress] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [passwordRepeat, setPasswordRepeat] = useState(''); 

  const onSignUpPress = () => {
    console.warn('Sign Up');
  }
  const onTermsOfUsePress = () => {
    console.warn('Terms of USe');
  }
  const onPrivacyPress = () => {
    console.warn('Privacy Policy');
  }
  return (
    <View>
      <Text style={styles.title}>Create Account</Text>
      <CustomInput 
        placeholder="First Name" 
        value={firstName}
        setValue={setFirstName}
      />
      <CustomInput 
        placeholder="Last Name" 
        value={lastName}
        setValue={setLastName}
      />
      <CustomInput 
        placeholder="Email Address" 
        value={emailAddress}
        setValue={setEmailAddress}
      />
      <CustomInput 
        placeholder="Password" 
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput 
        placeholder="Repeat Password" 
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
      />
      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and{' '} 
        <Text style={styles.link} onPress={onPrivacyPress}>Privacy Policy</Text>
      </Text>
      <Button onPress={onSignUpPress} >
        <ButtonText>Register</ButtonText>
      </Button>
      <Text>Have an account? Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding:20,
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
  },
  text: {
    color: 'gray',
    marginVertical:10,
  },
  link: {
    color:'#FDB075'
  }
})

export default SignUpScreen;