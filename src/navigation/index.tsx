import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation:React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{freezeOnBlur:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
export { RootStackParamList };