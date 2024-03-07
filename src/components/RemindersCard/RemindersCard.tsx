import { FlatList, StyleSheet, View } from "react-native";
import { Reminder } from "../../models/Reminder";

interface RemindersCardProps {
    reminderItems: Reminder[]
}

const RemindersCard: React.FC<RemindersCardProps> = ( {reminderItems}) => {
    return (
        <View style={styles.container}>
            <FlatList scrollEnabled={false}
                data={reminderItems}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.reminderItem}>
                        
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 8, 
        borderRadius: 10,
        backgroundColor: 'white',
    },
    reminderItem: {
        flex: 1,
        margin: 5,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bfd7ff',
        borderRadius: 10
      },
})

export default RemindersCard;