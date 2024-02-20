import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, InputField } from '@gluestack-ui/themed';

interface CustomInputProps {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Input style={styles.input}>
        <InputField 
          value={value} 
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </Input>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width: '100%',

    borderColor:'e8e8e8',
    borderWidth:1,
    borderRadius: 5,

    marginVertical:10,
  },
  input:{}
})

export default CustomInput