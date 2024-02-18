import { View, Image, StyleSheet, useWindowDimensions, Text } from "react-native";
import Logo from '../../../assets/japaboat.png';

const LoginScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View>
      <Image source={Logo} style={[styles.logo,{height: height* 0.3}]}/>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight:200,
  }
})

export default LoginScreen;