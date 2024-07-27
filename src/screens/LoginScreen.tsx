import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import TitleHead from '../components/TitleHead';
import TextField from '../components/TextField';
import {useState} from 'react';
import {Color} from '../utils/globalstyles';
import PrimaryButton from '../components/PrimaryButton';
import {Navigate} from '../utils/Navigate';
import { baseURL } from '../utils/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('screen');

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [loading, setLoading] = useState(false)
  console.log('Data  ==> ', [email, password]);

  const handleEmail = (e: any) => {
    setEmail(e);
  };
  const handlePassword = (e: any) => {
    setPassword(e);
  };

  const handleVisible = () => {
    setIsVisiblePassword(isVisiblePassword => !isVisiblePassword);
  };

  const handleLogin = async() => {
    console.log('Handle Login');
    try {

      setLoading(true)
      const apiRes = await fetch(`${baseURL}users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

    
      if(apiRes){
        const response = await apiRes.json()
        console.log('Login ==> ', response);
        setLoading(false)
         await AsyncStorage.setItem('userInfo', JSON.stringify(response))
        navigation.navigate(Navigate.HOME_SCREEN)
        
      }
      
      setLoading(false)
    } catch (error) {
      console.log("Login Error ==> ", error);
      setLoading(false)
      
      
    }
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: width * 0.3,
        alignItems: 'center',
        gap: width * 0.05,
      }}>
      <Image
        source={require('../assets/avatar.png')}
        style={{
          width: width * 0.3,
          height: width * 0.3,
          borderRadius: 20,
        }}
      />
      <Text style={{fontSize: 35, fontWeight: '500', color: Color.textGray}}>
        Login
      </Text>
      <View style={{gap: 10, width: width * 0.8}}>
        <TextField
          label={'Email'}
          placeholder={'Enter your email'}
          onInputChange={handleEmail}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <TextField
            style={{flex: 1}}
            label={'Password'}
            placeholder={'Enter your password'}
            onInputChange={handlePassword}
            hideText={isVisiblePassword}
          />
          <TouchableOpacity
            onPress={handleVisible}
            style={{
              alignItems: 'center',
              marginTop: 20,
              padding: width * 0.02,
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 4,
              backgroundColor: '#EDE7F8',
            }}>
            {isVisiblePassword ? (
              <Image
                source={require('../assets/eye.png')}
                style={{width: 22, height: 22}}
              />
            ) : (
              <Image
                source={require('../assets/eye-off.png')}
                style={{width: 22, height: 22}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <PrimaryButton onPress={() => handleLogin()} text="Login" loading={loading} />
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:15}}>Don't have an account ? </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Navigate.REGISTER_SCREEN)}>
        <Text style={{fontSize:15, color:Color.blue}}>register</Text>
      </TouchableOpacity>
      </View>


      <TouchableOpacity
        onPress={() => navigation.navigate(Navigate.HOME_SCREEN)}>
        <Text style={{fontSize:15, color:Color.blue}}>byPass to Home</Text>
      </TouchableOpacity>


    </View>
  );
};

export default LoginScreen;
