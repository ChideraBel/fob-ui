import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText } from "@gluestack-ui/themed";

const SignUpScreen:React.FC = () => {
  const [emailAddress, setEmailAddress] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 

  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [nationality, setNationality] = useState('');
  const [employment, setEmployment] = useState('');
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const onSignUpPress = () => {
    console.warn('Sign Up');
  }
  const onTermsOfUsePress = () => {
    console.warn('Terms of Use');
  }
  const onPrivacyPress = () => {
    console.warn('Privacy Policy');
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.textContainer}>
        <View style={{width:'48%'}}>
        <CustomInput 
          placeholder="First Name" 
          value={firstName}
          setValue={setFirstName}
        />
        </View>
        <View style={{width:'48%'}}>
        <CustomInput 
          placeholder="Last Name" 
          value={lastName}
          setValue={setLastName}
        />
        </View> 
      </View>
      <View style={styles.textContainer}>
        <View style={{width:'48%'}}>
          <CustomInput 
            placeholder="Email Address" 
            value={emailAddress}
            setValue={setEmailAddress}
          />
        </View>
        <View style={{width:'48%'}}>
          <CustomInput
            placeholder="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
        </View>
      </View>
      <View style={{width:'95%'}}>
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
          placeholder="School" 
          value={school}
          setValue={setSchool}
        />
        <CustomInput 
          placeholder="Address" 
          value={address}
          setValue={setAddress}
        />
      </View>
        <View style={styles.textContainer}>
          <View style={{width:'52%'}}>
          <CustomInput
            placeholder="City"
            value={city}
            setValue={setCity}
          />
          </View>
          
          <View style={{width:'20%'}}>
          <CustomInput
            placeholder="State"
            value={state}
            setValue={setState}
          />
          </View>
          
          <View style={{width:'15%'}}>
          <CustomInput
            placeholder="Zip"
            value={zipcode}
            setValue={setZipcode}
          />
          </View>
        </View>
      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and{' '} 
        <Text style={styles.link} onPress={onPrivacyPress}>Privacy Policy</Text>
      </Text>
      <Button style={styles.button} onPress={onSignUpPress} >
        <ButtonText>Register</ButtonText>
      </Button>
      <Text style={{marginTop:20}}>Have an account? Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    width:'100%',
    padding:20,
    paddingTop:100,
    paddingHorizontal: 20,
  },
  textContainer : {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'95%',
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom: 30,
    marginTop:50,
  },
  text: {
    color: 'gray',
    marginVertical:10,
  },
  link: {
    color:'#FDB075'
  },
  button: {
    width:'100%'
  }
})

export default SignUpScreen;