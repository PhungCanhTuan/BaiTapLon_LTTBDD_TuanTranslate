import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { CheckBox } from 'react-native-web';
// import { View, Text, CheckBox } from 'react-native-elements';
// thu vien can cai dat: npm install react-native-elements
import { Audio } from 'expo-av';


export const TuVungIELTS = ({navigation}) => {
    const titleScreen = 'TuVungIELTS';
    const [data,setData] = useState([])
    const [filteredData1, setFilteredData1] = useState([]);
    const [sound, setSound] = useState();
    var linkMp3 = '';

    useEffect(
        ()=>{
            getListData()
        }, []
    )

    const getListData = ()=>
    {
        fetch("https://6558f205e93ca47020a9ee7e.mockapi.io/baitaplon/dong-tu-bat-quy-tac")
        .then(response => response.json())
        .then( json => {
            const filteredData = json.filter(item => item.loaiTu === "tuVungIELTS");
            setData(filteredData)
            setFilteredData1(filteredData)
        }
        )
    }

    
    const [isChecked, setIsChecked] = useState(false);
    console.log(data);
    const Item = ({id, tu, phienAm ,nghia, linkMp3Item}) => (
        // <View style={styles.ItemWrapper}>
        <TouchableOpacity style={styles.ItemWrapper} onPress={()=>{
            navigation.navigate('WordDetail',{tu:tu,phienAm:phienAm,nghia:nghia,p:null,pp:null, titleScreen:titleScreen})
        }}>
            <Text style={styles.tu}>{tu}</Text>
            <View style={styles.phienAmWrapper}>
                <TouchableOpacity >
                    <CheckBox  style={styles.checked}
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                    />
                </TouchableOpacity>
                <Text style={styles.phienAm}>{phienAm}</Text>
                <View style={styles.iconWrapper}>
                    <TouchableOpacity style={styles.loaWrapper} onPress={()=>{
                        linkMp3 = require('../../../assets/mp3/file.mp3');
                        renderSound
                        playSound()
                    }}>
                        <Image style={styles.pngLoa} source={require("../../../assets/images/Union.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.starWrapper}>
                        <Image style={styles.pngStar} source={require("../../../assets/images/icon _star empty_.png")}></Image>
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={styles.nghia}>{nghia}</Text>
        </TouchableOpacity>
    )

    const searchFilterFunction = (text) => {
        if(text){  
            const newData = data.filter(item => {
                const itemData = item.tu ? item.tu.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData1(newData);
        } else {
            setFilteredData1(data);
        }
    }
    
    // //read file am thanh mp3
    const renderSound = useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);
    
    const playSound = async () => {
        try {
            const { sound: soundObject } = await Audio.Sound.createAsync(linkMp3);
            setSound(soundObject);
            await soundObject.playAsync();
        } catch (error) {
            console.error('Không thể phát âm thanh:', error);
        }
    };
    
    console.log('link file:', linkMp3);
    
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.preWrapper} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </Pressable>
                <Text style={styles.headerTxt}>Từ vựng IELTS - 0%</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <Image style={styles.pngSearchWrapper} source={require("../../../assets/images/icon _search_.png")}></Image>
                <TouchableOpacity style={styles.searchWrapper}>
                    <TextInput style={styles.timKiemTxt} placeholder='Tìm từ trong thư mục' 
                    onChangeText={(text) => searchFilterFunction(text)}
                    >
                    </TextInput>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={filteredData1}
                renderItem={({item}) => <Item id={item.id} tu={item.tu} phienAm={item.phienAm} nghia={item.nghia} linkMp3Item={item.linkMP3}></Item>}
            ></FlatList>
            
            {/* <View style={styles.footerWrapper}>
                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnTxt}>Game</Text>
                </TouchableOpacity>
                <View>
                <View style={styles.btnWrapper2}>
                    <TouchableOpacity style={styles.btnWrapper3}>
                        <Text style={styles.btnTxt}>Ôn tập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper3}>
                        <Text style={styles.btnTxt}>Tập viết</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper3}>
                        <Text style={styles.btnTxt}>Luyện tập</Text>
                    </TouchableOpacity>
                </View>

                </View>
           </View> */}

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
}
