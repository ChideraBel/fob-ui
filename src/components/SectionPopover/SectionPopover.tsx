import React from 'react';
import { Section } from '../../models/Section';
import { Modal, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface SectionPopoverProps {
    isOpen: boolean,
    close: any,
    section: Section,
    maxHeight: number
}

const SectionPopover: React.FC<SectionPopoverProps> = ({ isOpen, close, section, maxHeight }) => {
    if (!isOpen) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={close}
        >
            <TouchableOpacity style={styles.backdrop} onPress={close} activeOpacity={1}>
                <View 
                    style={[styles.modalView, {maxHeight: maxHeight}]} 
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={(event) => event.stopPropagation()}>
                    <Text>{section.content}</Text>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});

export default SectionPopover;