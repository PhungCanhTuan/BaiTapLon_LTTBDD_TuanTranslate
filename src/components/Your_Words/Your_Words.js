import React from 'react';
import { View, Text, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faMagnifyingGlass, faMicrophone, faVolumeHigh  } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen, faSquare, faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Your_Words = ({navigation}) => {
    // const [font] = useFonts({
    //     'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    // });
    const Data = [
        {
            id: 1,
            word:'pseudo',
            mean: 'giả, giả tạo, không chân thật'
        },

        // {
        //     id: 2,
        //     word:'appeal',
        //     mean: 'sự hấp dẫn, sự thích thú'
        // },

        // {
        //     id: 3,
        //     word:'pseudo',
        //     mean: 'giả, giả tạo, không chân thật'
        // },

        // {
        //     id: 4,
        //     word:'appeal',
        //     mean: 'sự hấp dẫn, sự thích thú'
        // },

        // {
        //     id: 5,
        //     word:'appeal',
        //     mean: 'sự hấp dẫn, sự thích thú'
        // },

        // {
        //     id: 6,
        //     word:'pseudo',
        //     mean: 'giả, giả tạo, không chân thật'
        // },

        // {
        //     id: 7,
        //     word:'appeal1',
        //     mean: 'sự hấp dẫn, sự thích thú'
        // },
    ]

    const renderItem = ({item}) => (
        <View style={{alignItems:'center', marginTop: 10}}>
            <View style={styles.viewItem}>
                <View style={{marginLeft: 10}}>
                    <FontAwesomeIcon color='#0156A7' size={23} icon={faSquare} />
                </View>

                <View style={{marginLeft: 15}}>
                    <Text style={styles.textWord}> {item.word} </Text>
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

                <Text style={styles.nameHeader}>Từ của bạn</Text>

                <Pressable style={{marginRight: 5}}>
                    <FontAwesomeIcon style={styles.icon} size={25} icon={faBars} />
                </Pressable>
            </View>

            <View style={styles.viewOP}>
                <View style={styles.viewSearchInput}>
                    <FontAwesomeIcon style={{zIndex: 0, marginRight: -30, opacity: 0.5}} size={20} icon={faMagnifyingGlass} />
                    <TextInput style={styles.searchInput} placeholder='Tìm từ trong thư mục' ></TextInput>
                    <FontAwesomeIcon style={{marginLeft: -30, opacity: 0.5}} size={20} icon={faMicrophone} />
                </View>

                <View style={{flexDirection: 'row', width: '100%', marginTop: 10, alignItems: 'center'}} >
                    <Pressable style={[styles.btnOP, {backgroundColor: '#CF6600'}]}>
                        <Text style={styles.textOP}> Từ đã lưu </Text>      
                    </Pressable>

                    <Pressable style={[styles.btnOP, {backgroundColor: '#AFAFAF'}]}>
                        <Text style={styles.textOP} > Từ đang học </Text>      
                    </Pressable>

                    <FontAwesomeIcon style={{marginLeft: 10}} color='#0156A7' size={26} icon={faFolderOpen} />
                </View>
            </View>

            <FlatList
                data={Data} 
                renderItem={renderItem}
                keyExtractor={item => item.id}
            ></FlatList>  
            
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