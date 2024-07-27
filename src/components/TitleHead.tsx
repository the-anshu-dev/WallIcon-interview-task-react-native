import {Image, Text, TouchableOpacity, View} from 'react-native';
import { Color } from '../utils/globalstyles';
import { useNavigation } from '@react-navigation/native';
import { Navigate } from '../utils/Navigate';

const TitleHead = ({userName}:any) => {
  const navigation=useNavigation()
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:Color.darkDeepGray, padding:10, borderRadius:20 }}>
      <Text style={{fontSize:25,color:Color.white}}>Welcome, {userName}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('Profile photo clicked');
        }}>
      <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
      <Image source={require('../assets/avatar.png')}   style={{width:35, height:35, borderRadius:50}} />
      <TouchableOpacity onPress={()=>navigation.replace(Navigate.WELCOME_SCREEN)}><Text style={{fontSize:20,color:Color.white}}>Logout</Text></TouchableOpacity>
      </View>
      </TouchableOpacity>
    </View>
  );
};
export default TitleHead;
