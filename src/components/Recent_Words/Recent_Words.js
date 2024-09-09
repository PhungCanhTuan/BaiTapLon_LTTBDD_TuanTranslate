import React, {useEffect, useState} from 'react';
import { View, Text, Pressable, TextInput,  ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faMagnifyingGlass, faMicrophone, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';
import { text } from '@fortawesome/fontawesome-svg-core';

export const Recent_Words = ({route, navigation}) => {
    // const { change } = route.params;
    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);
    // console.log(change);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        fetch('https://66ceef66901aab2484203573.mockapi.io/apiTuDien/apiTuDienRecent')
        .then(response =>{
            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error('Too Many Requests');
                } else {
                    throw new Error('Other error');
                }
            }
            return response.json();
          })
        .then(json => {
            setData(json);
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
    }, [data])

    const filteredData = data.filter(item =>
        item.english.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const renderItem = (item) => (
        <View key={item.id} style={{alignItems: 'center'}}>
            <View style={styles.viewItem} >
                <View style={{marginLeft: 10}}>
                    <FontAwesomeIcon color='#0156A7' size={23} icon={faSquare} />
                </View>

                <View style={{marginLeft: 15}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textWord}> {item.english}</Text>
                        <Text style={{fontSize: 16, fontWeight: '400', marginLeft:15}}> {item.p}</Text>
                    </View>
                    <Text style={styles.textMean}> {item.mean} </Text>
                </View>

                <View style={styles.viewFunc}>
                    <FontAwesomeIcon style={styles.volOP} size={21} color='#0156A7' icon={faVolumeHigh} />
                    <FontAwesomeIcon style={styles.volStar} size={21} color='#0156A7' icon={faStar} />
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ đã tra</Text>

                <Pressable style={{marginRight: 5}}>
                    <FontAwesomeIcon style={styles.icon} size={25} icon={faBars} />
                </Pressable>
            </View>

            <View style={{alignItems: 'center'}}>
                <View style={styles.viewSearchInput}>
                    <FontAwesomeIcon style={{zIndex: 0, marginRight: -30, opacity: 0.5}} size={20} icon={faMagnifyingGlass} />
                    <TextInput style={styles.searchInput} placeholder='Tìm từ trong thư mục' onChangeText={text => setSearchKeyword(text)} value={searchKeyword} ></TextInput>
                    <FontAwesomeIcon style={{marginLeft: -30, opacity: 0.5}} size={20} icon={faMicrophone} />
                </View>
            </View>

            <ScrollView style={styles.body}> 
                {
                    filteredData.map(renderItem)
                }
            </ScrollView>

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