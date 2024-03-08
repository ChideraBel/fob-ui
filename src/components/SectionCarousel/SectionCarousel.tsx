import React from 'react';
import { Section } from '../../models/Section';
import { StyleSheet, View } from 'react-native';

interface SectionCarouselPrrops {
    sections: Section[]
}

const SectionCarousel: React.FC<SectionCarouselPrrops> = ({ sections }) => {
    return (
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        height: 100,
        backgroundColor: '#sdfer4'
    }
})

export default SectionCarousel;
