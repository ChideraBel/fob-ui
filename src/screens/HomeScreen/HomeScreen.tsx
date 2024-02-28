import { View, useWindowDimensions, StyleSheet } from "react-native"
import { Pressable, ScrollView, Text, Progress, ProgressFilledTrack } from '@gluestack-ui/themed';

const HomeScreen = () => {
    const items = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"];

    return (
        <View>
            <ScrollView style={{paddingTop: 15}}>
                <View style={styles.progress}>
                    <Progress value={70} width={'90%'} height={15}>
                        <ProgressFilledTrack style={{backgroundColor: "#2DBFA9"}}/>
                    </Progress>
                </View>
                {items.map((item, index) => (
                    <View key={index} style={[styles.sectionContainer, { alignItems: index%2 == 0 ? 'flex-start' : 'flex-end' }]}>
                        <Pressable style={styles.section}>
                            <Text>{item}</Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    progress: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    sectionContainer: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop:10,
      height:210,
    },
    section: {
        height: 200,
        width: 200,
        borderRadius: 200,
        backgroundColor: '#2DBFA9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
  })

  export default HomeScreen;