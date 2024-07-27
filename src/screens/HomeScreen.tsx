import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TitleHead from '../components/TitleHead';
import { Color } from '../utils/globalstyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigate } from '../utils/Navigate';
import { useEffect, useState } from 'react';
import { baseURL } from '../utils/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dummy = [
  {
    id: 1,
    name: 'Phone',
    color: 'green',
    material: 'Plastic',
    categ: 'Electonic',
  },
  {
    id: 2,
    name: 'Keyboard',
    color: 'black',
    material: 'Plastic',
    categ: 'Electonic',
  },
  {
    id: 3,
    name: 'WallPaper',
    color: 'brown',
    material: 'Paper',
    categ: 'Decoration',
  },
  {
    id: 4,
    name: 'Screen',
    color: 'blue',
    material: 'Mirror',
    categ: 'Electonic',
  },
  {
    id: 5,
    name: 'Mouse',
    color: 'Orange',
    material: 'Plastic',
    categ: 'Electonic',
  },
  {
    id: 6,
    name: 'Chair',
    color: 'red',
    material: 'Plastic',
    categ: 'Usage',
  },
];

const HomeScreen = ({ navigation }: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);

  console.log("Async UserInfo ==> ", userInfo);
  console.log("Async UserInfo name ==> ", userInfo?.name);

  const ProductInitialize = async () => {
    console.log('Initialize Product');
    try {
      setLoading(true);
      const apiRes = await fetch(`${baseURL}products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (apiRes) {
        const response = await apiRes.json();
        setProducts(response);
        console.log('Products ==> ', response);
        setLoading(false);
      }

      setLoading(false);
    } catch (error) {
      console.log('Products Error ==> ', error);
      setLoading(false);
    }
  };

  const handleUser = async () => {
    try {
      const user = await AsyncStorage.getItem('userInfo');
      if (user) {
        const temp = JSON.parse(user);
        console.log("temp==> ", temp.name);
        setUserInfo(temp);
      }
    } catch (error) {
      console.log("Async error ", error);
    }
  };

  useEffect(() => {
    handleUser();
    ProductInitialize();
  }, []);

  console.log("State Products ==>", products);

  const Item = ({ prop }: any) => {
    console.log('Home ==Props ==> ', prop);

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Navigate.PRODUCT_DETAILS, { ...prop });
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
            backgroundColor: Color.lightBlack,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontSize: 20, color: Color.white }}>{prop.product_name}</Text>
          <Text style={{ fontSize: 20, color: Color.white }}>{prop.product_id}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ margin: 10 }}>
      <TitleHead userName={userInfo?.name || "Guest"} />
      <View style={{ backgroundColor: Color.DeepLightGray }}>
        <Text style={{ fontSize: 25 }}>Product List</Text>

        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <ScrollView style={{ backgroundColor: 'red', height: '80%' }}>
            <FlatList
              data={products}
              renderItem={({ item }) => <Item prop={item} />}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
