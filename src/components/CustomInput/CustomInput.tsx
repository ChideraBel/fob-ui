import { Divider, EyeOffIcon } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface CustomInputProps {
  value: string;
  setValue: (text: string) => any;
  placeholder?: string;
  secureTextEntry?: boolean,
  centerText?: boolean
}

//TODO: Make eye icon pressable to toggle password view and fix shifting words
const CustomInput: React.FC<CustomInputProps> = ({ value, setValue, placeholder, secureTextEntry, centerText }) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={setValue}
          style={[styles.input, {width: secureTextEntry? '90%': '100%', textAlign: centerText? 'center':'auto', color: "#788BFF"}]}
          placeholder={placeholder}
          placeholderTextColor={isFocus? '#788BFF' : "#858585"}
          secureTextEntry={secureTextEntry} />
        <View style={styles.iconContainer}>
          {secureTextEntry && <EyeOffIcon color= {isFocus ? '#788BFF' : '#adadad'} height={12}/>}
        </View>
      </View>
      <Divider style={{ height: 1, backgroundColor: isFocus ? '#788BFF' : '#e0e0e0'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    height: 30,
  },
  iconContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    width: 15
  },
  textInputContainer: { 
    flexDirection: 'row', 
    display: 'flex', 
    justifyContent: 'space-between'
  }
})

export default CustomInput