import { View, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView, Text, Platform, Pressable } from "react-native";
import Logo from "assets/japaboat.png";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText, Divider, ScrollView } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { Link, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../navigation/index";
import { userLogin } from "../../services/auth/AuthenticationService";
import IconButton from "../../components/IconButton";
import Google from "assets/google-icon.png";
import Outlook from "assets/outlook-icon.png";

type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }: LoginScreenProps) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [triggerTime, setTriggerTime] = useState('');
  const [response, isLoading, error] = userLogin(triggerTime, emailAddress, password);;

  const { height } = useWindowDimensions();

  useEffect(() => {
  }, [response])

  useEffect(() => {
    if (!error) return;
    console.log(error.message);
  }, [error])

  const onSignInPress = () => {
    const trigger = new Date();
    setTriggerTime(trigger.toDateString());

    navigation.navigate('Home');
  }

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }

  const onSSOPressed = (type: string) => {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView backgroundColor='white' height={'100%'}>
        <View style={{ paddingTop: height*0.13, alignItems: 'center'}}>
          <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        </View>
        <View style={styles.root}>
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
          <Button borderRadius={10} style={styles.loginButton} onPress={onSignInPress}>
            <ButtonText>{isLoading ? "Loging in..." : "Log In"}</ButtonText>
          </Button>
          <Pressable style={{paddingTop: 10}}><Text style={styles.link}>Forgot password?</Text></Pressable>
          <View style={{ flexDirection: "row", paddingVertical: 14 }}>
            <Text style={{fontSize: 15, paddingRight: 5}}>New user?</Text>
            <Pressable onPress={onSignUpPress}><Text style={styles.link}>Register here!</Text></Pressable>
          </View>
        </View>
        <View style={styles.footer}>
          <Divider style={{height: 1.2, backgroundColor: '#788BFF'}}></Divider>
          <View style={{flexDirection: 'row', paddingTop: 14}}>
            <IconButton onPress={() => onSSOPressed("Google")} icon={Google}/>
            <IconButton onPress={() => onSSOPressed("Outlook")} icon={Outlook}/>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 10,
    backgroundColor: '#788BFF',
  },
  link: {
    color: '#788BFF',
    fontSize: 15
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 30
  }
})

export default LoginScreen;