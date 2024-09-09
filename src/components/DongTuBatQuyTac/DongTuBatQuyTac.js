
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Button, Pressable, TextInput } from 'react-native';
import { CheckBox } from 'react-native-web';
import { styles } from './style';
import { Audio } from 'expo-av';

export const DongTuBatQuyTac = ({ navigation }) => {
    const titleScreen = 'DongTuBatQuyTac';
    const [data, setData] = useState([]);
    const [filteredData1, setFilteredData1] = useState([]);
    const [sound, setSound] = useState();
    const [isChecked, setIsChecked] = useState(false);
    
    // Fetch the list of irregular verbs from the API
    useEffect(() => {
        getListData();
    }, []);

    const getListData = () => {
        fetch("https://66cfd198181d059277dc60b8.mockapi.io/apiTuDien/tuDienBatQuyTac")
            .then(response => response.json())
            .then(json => {
                setData(json);
                setFilteredData1(json);
            });
    };

    const ListItem = ({ id, english, v2, v3, mean }) => (
        <TouchableOpacity 
            key={id} 
            style={styles.ItemWrapper} 
            onPress={() => navigation.navigate('WordDetail', { english, v2, v3, mean, titleScreen })}
        >
            <Text style={[styles.ItemTu, { fontWeight: 700, marginLeft: 36 }]}>{english}</Text>
            <Text style={[styles.ItemTu, { marginLeft: 36 }]}>{v2} / {v3}</Text>
            <Text style={[styles.ItemTu, { marginLeft: 36 }]}>{mean}</Text>
            
            <TouchableOpacity>
                <CheckBox 
                    style={styles.checked}
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    const searchFilterFunction = (text) => {
        if (text) {  
            const newData = data.filter(item => {
                const itemData = item.english ? item.english.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData1(newData);
        } else {
            setFilteredData1(data);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.preWrapper} onPress={() => {navigation.navigate('Home')}}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")} />
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </Pressable>
                <Text style={styles.headerTxt}>Động từ bất quy tắc</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <Image style={styles.pngSearchWrapper} source={require("../../../assets/images/icon _search_.png")} />
                <TouchableOpacity style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.timKiemTxt} 
                        underlineColorAndroid="transparent" 
                        placeholder='Tìm từ trong thư mục' 
                        onChangeText={text => searchFilterFunction(text)}
                    />
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={filteredData1}
                renderItem={({ item }) => (
                    <ListItem 
                        id={item.id} 
                        english={item.english} 
                        v2={item.v2} 
                        v3={item.v3} 
                        mean={item.mean}
                    />
                )}
            />

            <View style={styles.footer}>
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Ôn tập</Text>
                </Pressable>
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Tập viết</Text>
                </Pressable>
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Game</Text>
                </Pressable>
                <Pressable style={styles.buttonFooter}>
                    <Text style={styles.textFooter}>Game vip</Text>
                </Pressable>
            </View>
        </View>
    );
};
