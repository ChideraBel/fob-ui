import { View, useWindowDimensions, StyleSheet, Animated } from "react-native"
import { Pressable, ScrollView, Text, Progress, ProgressFilledTrack, Divider } from '@gluestack-ui/themed';
import { deleteData } from "../../services/utils/Storage";
import { useEffect, useRef } from "react";
import AppBar from "../../components/AppBar";
import RemindersCard from "../../components/RemindersCard";
import SectionCarousel from "../../components/SectionCarousel";

const HomeScreen = () => {
    //TODO: change section to updated design on figma
    const items = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"];
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

      const faqClicked = () => {

      }

      const filesClicked = () => {

      }

    return (
        <View style={styles.root}>
            <Animated.ScrollView style={{ paddingTop: height*0.038, opacity: fadeAnim}}>
                <AppBar menuAction={logOut} actionBarItems={[{icon: 'folder', action: filesClicked}, {icon: 'info', action: faqClicked}]}/>
                <View style={styles.progress}>
                    <Progress value={70} width={'90%'} height={15}>
                        <ProgressFilledTrack style={{ backgroundColor: "#5465ff" }} />
                    </Progress>
                </View>
                <RemindersCard reminderItems={[{name: "Test 1"}, {name: "Test 2"}, {name: "Test 3"}, {name: "Test 4"}]}/>
                <View style={{alignItems: 'center', paddingBottom: 10}}><Divider style={styles.divider}></Divider></View>
                <SectionCarousel sections={[{name: 'Test1', content: 'Content 1', description: 'lalal'}, {name: 'Tes31', content: 'Content 1d', description: 'lalal'}]}/>
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: { 
        height: '100%', 
        backgroundColor: 'white',
    },
    progress: {
        paddingVertical: 10,
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