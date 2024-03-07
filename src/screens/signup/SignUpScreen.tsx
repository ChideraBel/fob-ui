import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText, ScrollView } from "@gluestack-ui/themed";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";

type SignUpScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }: SignUpScreenProps) => {
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


  const { height } = useWindowDimensions();

  const onSignUpPress = () => {
    console.warn('Sign Up');
  }

  const onTermsOfUsePress = () => {
    console.warn('Terms of Use');
  }

  const onPrivacyPress = () => {
    console.warn('Privacy Policy');
  }

  const onSignInPress = () => {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}>
      <ScrollView backgroundColor='white' height={'100%'}>
        <View style={[styles.root, {padding: height*0.1}]}>
          <Text style={styles.title}>Create Account</Text>
          <View style={styles.textContainer}>
            <View style={{ width: '48%' }}>
              <CustomInput
                placeholder="First Name"
                value={firstName}
                setValue={setFirstName}
              />
            </View>
            <View style={{ width: '48%' }}>
              <CustomInput
                placeholder="Last Name"
                value={lastName}
                setValue={setLastName}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={{ width: '48%' }}>
              <CustomInput
                placeholder="Email Address"
                value={emailAddress}
                setValue={setEmailAddress}
              />
            </View>
            <View style={{ width: '48%' }}>
              <CustomInput
                placeholder="Phone Number"
                value={phoneNumber}
                setValue={setPhoneNumber}
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
            <View style={{ width: '52%' }}>
              <CustomInput
                placeholder="City"
                value={city}
                setValue={setCity}
              />
            </View>

            <View style={{ width: '20%' }}>
              <CustomInput
                placeholder="State"
                value={state}
                setValue={setState}
              />
            </View>

            <View style={{ width: '15%' }}>
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
          <Button style={styles.signupButton} onPress={onSignUpPress} >
            <ButtonText>Register</ButtonText>
          </Button>
          <View style={{ flexDirection: "row", paddingVertical: 14 }}>
            <Text style={{fontSize: 15, paddingRight: 5}}>Have an account?</Text>
            <Pressable onPress={onSignInPress}><Text style={styles.link}>Sign in</Text></Pressable>
          </View>
        </View>
      </ScrollView>
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
    color: "#788BFF"
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#788BFF'
  },
  signupButton: {
    width: 'auto',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#788BFF',
  },
})

export default SignUpScreen;