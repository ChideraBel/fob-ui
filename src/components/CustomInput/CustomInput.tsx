import { Divider, EyeOffIcon } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface CustomInputProps {
  value: string;
  setValue: (text: string) => any;
  placeholder?: string;
  secureTextEntry?: boolean
}

//TODO: Make eye icon pressable to toggle password view and fix shifting words
const CustomInput: React.FC<CustomInputProps> = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#788BFF"
          secureTextEntry={secureTextEntry} />
        <View style={{display: 'flex', justifyContent: "center", width: 'auto'}}>
          {secureTextEntry && <EyeOffIcon color="#788BFF" height={15}/>}
        </View>
      </View>
      <Divider style={{ height: 1. }} />
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
    height: 40,
  },
})

export default CustomInput