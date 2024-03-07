import { ActionBarItem } from "../../models/ActionBarItem";
import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HStack } from "@gluestack-ui/themed";

interface AppBarProps {
    actionBarItems: ActionBarItem[]
    menuAction?: any;
}

const AppBar: React.FC<AppBarProps> = ({ menuAction, actionBarItems }) => {
    return (
        <View style={styles.appBar}>
            <View style={styles.menu}><Pressable onPress={menuAction}><Icon name='menu' size={30} color='#788BFF'/></Pressable></View>
            <View style={styles.actionItems}>
                {actionBarItems.map((item, index) => (
                    <View key={index}>
                        <Pressable style={styles.icon} onPress={item.action}><Icon name={item.icon} size={30} color='#788BFF'/></Pressable>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        height: 35,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    menu: {
        alignSelf: 'flex-start',
        height: 30,
    },
    actionItems: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    icon: {
        paddingLeft: 5
    }
})
export default AppBar;