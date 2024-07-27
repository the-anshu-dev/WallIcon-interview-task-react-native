import { ActivityIndicator, Dimensions, Text, TouchableOpacity } from "react-native"
import { Color, FontSize, Padding } from "../utils/globalstyles"
const { width, height } = Dimensions.get("screen");

const PrimaryButton = ({text,onPress,bgColor, loading}:any)=>{
    return(
        <TouchableOpacity  style={{  backgroundColor:bgColor?bgColor:Color.blue, paddingHorizontal:width*0.1, paddingVertical:width*0.02, borderRadius:10}} onPress={onPress}>
            {loading?
            <ActivityIndicator color={Color.white}/>:
            
            <Text style={{color:Color.white, textAlign:'center', fontSize:FontSize.size_md}}>{text}</Text>
            }

        </TouchableOpacity>
    )
}


export default PrimaryButton