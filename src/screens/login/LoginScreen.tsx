import { View, Image, StyleSheet, useWindowDimensions, Text } from "react-native";
import Logo  from "assets/japaboat.png";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { useState } from "react";
import { NavigationProp} from '@react-navigation/native';
import { RootStackParamList } from "../../navigation/index";

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const LoginScreen: React.FC<HomeScreenProps> = ({navigation}: HomeScreenProps) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPress = () => {
    navigation.navigate('Home');
  }
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}/>
      <Text style={styles.logoName} >JaPa</Text>
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
      <Button style={styles.loginButton} onPress={onSignInPress} >
        <ButtonText>Sign In</ButtonText>
      </Button>
      <Text style={styles.createText}>Don't have an account? Create One</Text>
      <Button style={styles.loginButton} onPress={onSignUpPress} >
        <ButtonText>Create Account</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white',
  },
  logo:{
    marginTop:40,
    width: '70%',
    maxWidth: 300,
  },
  logoName: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#0077E6',
    margin:20,
  },
  loginButton: {
    width:'100%',
    marginTop:20,
  },
  createText: {
    padding:5,
    marginTop:20,
    marginBottom:10,
  }
})

export default LoginScreen;