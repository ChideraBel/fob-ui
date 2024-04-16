import { View, useWindowDimensions, StyleSheet, Animated } from "react-native"
import { Progress, ProgressFilledTrack, Divider, Spinner } from '@gluestack-ui/themed';
import { deleteData } from "../../services/utils/Storage";
import React, { useEffect, useRef, useState } from "react";
import { Section } from '../../models/Section';
import AppBar from "../../components/AppBar";
import RemindersCard from "../../components/RemindersCard";
import SectionCarousel from "../../components/SectionCarousel";
import { getAllSections } from "../../services/home/SectionsService";
import SectionPopover from "../../components/SectionPopover";

const HomeScreen = () => {
    
    const [triggerTime, setTriggerTime] = useState("");
    const [showSection, setShowSection] = useState(false);
    const [section, setSection] = useState(null as unknown as Section)
    const [items, isLoading, error] = getAllSections(triggerTime);
    const { height } = useWindowDimensions();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const logOut = () => {
        deleteData("email");
    }

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 450,
                useNativeDriver: true,
            }
        ).start();
    }, []);

    const clickSection = (section: Section) => {
        setShowSection(true)
        setSection(section)
        console.log(section)
    }

    const faqClicked = () => {

    }

    const filesClicked = () => {

    }

    return (
        <View style={styles.root}>
            <Animated.ScrollView style={{ paddingTop: height * 0.038, opacity: fadeAnim }}>
                <AppBar menuAction={logOut} actionBarItems={[{ icon: 'folder', action: filesClicked }, { icon: 'info', action: faqClicked }]} />
                <View style={styles.progress}>
                    <Progress value={30} width={'90%'} height={15}>
                        <ProgressFilledTrack style={{ backgroundColor: "#5465ff" }} />
                    </Progress>
                </View>
                <RemindersCard reminderItems={[{ name: "Test 1" }, { name: "Test 2" }, { name: "Test 3" }, { name: "Test 4" }]} />
                <View style={{ alignItems: 'center', paddingVertical: 20 }}><Divider style={styles.divider}></Divider></View>
                {isLoading && <Spinner/>}
                {items && !isLoading && <SectionCarousel sections={items} sectionClicked={clickSection}/>}
            </Animated.ScrollView>
            {section && <SectionPopover isOpen={showSection} close={() => setShowSection(false)} section={section} maxHeight={height*0.85} />}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: 'white',
    },
    progress: {
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    sectionContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        height: 210,
    },
    section: {
        height: 200,
        width: 200,
        borderRadius: 200,
        backgroundColor: '#2DBFA9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: 1.2,
        backgroundColor: '#e0e0e0',
        width: '92%',
    },
})

export default HomeScreen;