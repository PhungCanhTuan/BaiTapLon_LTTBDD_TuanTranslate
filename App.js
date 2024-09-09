import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen_Home } from './src/components/Screen_Home/Screen_Home';
import { NavigationContainer } from '@react-navigation/native';
import { Recent_Words } from './src/components/Recent_Words/Recent_Words';
import { Your_Words } from './src/components/Your_Words/Your_Words';
import { Account } from './src/components/Account/Account';
import { Vip_Practice } from './src/components/VIP_Practice/Vip_Practice';
import { VIP_SGK } from './src/components/VIP_SGK/VIP_SGK';
import { VIP_SGKNEW } from './src/components/VIP_SGKNEW/VIP_SGKNEW';
import { Translate_Dictionary } from './src/components/Translate_Dictionary/Translate_Dictionary';
import { Translate_English } from './src/components/Translate_English/Translate_English';
import { Dictionary_AnhViet } from './src/components/Dictionary_AnhViet/Dictionary_AnhViet';
import { CaiDat } from './src/components/CaiDat/CaiDat';
import { DichVanBan } from './src/components/DichVanBan/DichVanBan';
import { UngDungHocTiengAnhKhac } from './src/components/UngDungHocTiengAnhKhac/UngDungHocTiengAnhKhac';
import { DongTuBatQuyTac } from './src/components/DongTuBatQuyTac/DongTuBatQuyTac';
import { TuVungIELTS } from './src/components/TuVungIELTS/TuVungIELTS';
import { TuVungToeic } from './src/components/TuVungToeic/TuVungToeic';
import { WordDetail } from './src/components/Word_Detail/WordDetail';


const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"  
          component={Screen_Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Recent_Words"
          component={Recent_Words}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Your_Words"
          component={Your_Words}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Vip_Practice"
          component={Vip_Practice}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="VIP_SGK"
          component={VIP_SGK}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="VIP_SGKNEW"
          component={VIP_SGKNEW}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Translate_Dictionary"
          component={Translate_Dictionary}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Translate_English"
          component={Translate_English}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Dictionary_AnhViet"
          component={Dictionary_AnhViet}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="CaiDat"
          component={CaiDat}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="DichVanBan"
          component={DichVanBan}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="UngDungHocTiengAnhKhac"
          component={UngDungHocTiengAnhKhac}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="DongTuBatQuyTac"
          component={DongTuBatQuyTac}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="TuVungIELTS"
          component={TuVungIELTS}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="TuVungToeic"
          component={TuVungToeic}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="WordDetail"
          component={WordDetail}
          options={{
            headerShown: false
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
