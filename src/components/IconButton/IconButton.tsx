import React from "react";
import { Image, StyleSheet, Pressable } from 'react-native';
import { View } from "@gluestack-ui/themed";


interface IconButtonProps {
    onPress: (text: string) => any;
    icon: any;
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, icon }) => {
    return (
        <View style={styles.container}><Pressable onPress={() => onPress}>
            <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={icon} />
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 5
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})

export default IconButton;