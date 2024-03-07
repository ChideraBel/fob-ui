import AsyncStorage from '@react-native-async-storage/async-storage';

// Saving data
export const saveData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Error saving data:', error);
    }
};

// Retrieving data
export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
};

// Delete data
export const deleteData = async (key: string) => {
    try {
        const value = await AsyncStorage.removeItem(key);
        if (value !== null) {
            console.log('Deleted value:', value);
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}