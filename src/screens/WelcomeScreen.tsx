// import {Button, Dimensions, Text, View} from 'react-native';
// import {Navigate} from '../utils/Navigate';
// import PrimaryButton from '../components/PrimaryButton';
// const {width, height} = Dimensions.get('screen');

// const WelcomeScreen = ({navigation}: any) => {

//     const onLogin=()=>{
//         navigation.navigate(Navigate.LOGIN_SCREEN)

//     }
//   return (
//     <View style={{flex:1, justifyContent:'center', gap:20, alignItems:'center'}}>
//         <Text style={{fontSize: 35, textAlign: 'center'}}>Welcome Screen</Text>
//         <Text style={{fontSize: 15, textAlign: 'center',  marginHorizontal:30}}>lorem isfh sdfds efj dfsgfr gfs wefj fea sedif  isfh sdfds efj dfsgfr gfs wefj fea sedif sdif </Text>
//         <PrimaryButton onPress={onLogin} text='Login'/>
      
//     </View>
//   );
// };

// export default WelcomeScreen;



import React, { useEffect, useState } from "react";
import { Button, Dimensions, Image, Modal, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Color, FontSize } from "../utils/globalstyles";
import PrimaryButton from "../components/PrimaryButton";
import { Navigate } from "../utils/Navigate";
 

const { width, height } = Dimensions.get("screen");

const WelcomeScreen = ({ navigation }: any) => { 

  


 

  const handleLogin = () => {
    console.log('For Login Screen');
    navigation.navigate(Navigate.LOGIN_SCREEN);
  };
  const handleRegister = () => {
    console.log('For Register Screen');
    navigation.navigate(Navigate.REGISTER_SCREEN);
  };


  



  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: width * 0.1,
        gap: width * 0.05,
      }}
    >
      <Image
        source={require("../assets/avatar.png")}
        style={{
          width: width * 0.3,
          height: width * 0.3,
          borderRadius:20
        }}
      />
      <Text style={{ textAlign: "center", color: Color.textGray }}>
        Lorem ipsum, dolor s sdf sdfg sdfg wef sequi voluptatem unde pariatur vel!
      </Text>
      <View style={{ flexDirection: 'row', gap: width * 0.05 }}>
        <PrimaryButton onPress={() => handleLogin()} text='Login' />
        <PrimaryButton onPress={() => handleRegister()} text='Register' />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: FontSize.size_lr,
    color: Color.black
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    color: Color.black
  },
});

export default WelcomeScreen;
