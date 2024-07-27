import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigate} from '../utils/Navigate';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ReLogin from '../screens/ReLogin';

 

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigate.WELCOME_SCREEN}>
      <Stack.Screen name={Navigate.WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={Navigate.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Navigate.REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen name={Navigate.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={Navigate.RELOGIN_SCREEN} component={ReLogin} />
      <Stack.Screen name={Navigate.PRODUCT_DETAILS} component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
