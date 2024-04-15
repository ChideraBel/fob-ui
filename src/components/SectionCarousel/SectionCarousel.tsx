import React from 'react';
import { Section } from '../../models/Section';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Carousel from 'pinar';
import Icon from 'react-native-vector-icons/AntDesign';

interface SectionCarouselPrrops {
    sections: Section[]
}

const SectionCarousel: React.FC<SectionCarouselPrrops> = ({ sections }) => {
    const images = [require('../../../assets/visa_vitality_img.png'), require('../../../assets/campus_careers_img.png'), require('../../../assets/ssn_simplified_img.png'), 
                    require('../../../assets/b_for_b_img.png'), require('../../../assets/future_focused_img.png'), require('../../../assets/cpt_clarity_img.png'), 
                    require('../../../assets/opt_odyssey_img.png'), require('../../../assets/h1b_horizons_img.png'), require('../../../assets/gcg_img.png')];
    return (
        <View style={styles.root}>
            <Text style={styles.title}>My Progress</Text>
            <Carousel showsControls={false} style={styles.carousel}>
                {sections.map((section, index) => (
                    <View key={index} style={{ width: '96%', alignSelf: 'center'}}>
                        <ImageBackground source={images[index]} style={styles.section}>
                            <View style={styles.topContent}>
                                <Icon name='arrowsalt' size={27} color={'#ededed'}></Icon>
                            </View>
                            <View style={styles.bottomContent}>
                                <Text style={styles.sectionTitle}>{section.name}</Text>
                                <Text style={styles.sectionDescription}>{section.description}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </Carousel>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
    },
    carousel: {
        height: 320,
    },
    section: {
        resizeMode: 'stretch',
        height: 280,
        borderRadius: 10,
        backgroundColor: '##bfd7ff',
        width: '100%',
        alignSelf: 'center',
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 5,
        color: "#5465ff"
    },
    sectionTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 10
    },
    sectionDescription: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ededed',
        paddingLeft: 12
    },
    topContent: {
        alignItems: 'flex-end', 
        padding: 5
    },
    bottomContent: {
        paddingBottom: 8
    }
})

export default SectionCarousel;
