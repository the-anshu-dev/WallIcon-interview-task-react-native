import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TitleHead from '../components/TitleHead';
import {Color} from '../utils/globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Navigate} from '../utils/Navigate';
import BackButton from '../components/BackButton';
const dummy = [
  {
    id: 1,
    name: 'Anshu',
  },

  {
    id: 2,
    name: 'Anshu',
  },
];

const ProductDetailScreen = ({navigation, route}: any) => {
  console.log('Detail props ==> ', route.params);
  const item = route.params;

  return (
    <View style={{margin: 10, flex: 1}}>
      <View style={{flex: 1, backgroundColor: Color.DeepLightGray}}>
        <BackButton navigation={navigation}/>

        <View style={{flex: 1, paddingTop: '10%'}}>
          <Text style={{fontSize: 30, fontWeight: '500', marginBottom: 30}}>
            Product Details
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Product id : {item.product_id ? item.product_id : 'undeine'}
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Product Name : {item.product_name ? item.product_name : 'undefine'}
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Product Color : {item.product_color ? item.product_color : 'undefine'}
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Product Category : {item.product_categ ? item.product_categ : 'undefine'}
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Product Material : {item.product_material ? item.product_material : 'undefine'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
