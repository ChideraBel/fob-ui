import { View, Image, StyleSheet, useWindowDimensions, Text } from "react-native";
import Logo  from "assets/japaboat.png";
import CustomInput from "../../components/CustomInput";
import { Button, ButtonText } from "@gluestack-ui/themed";

const LoginScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.2}]}/>
      <CustomInput/>
      <Button>
        <ButtonText>Button</ButtonText>
      </Button>
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
    marginBottom:40,
  }
})

export default LoginScreen;