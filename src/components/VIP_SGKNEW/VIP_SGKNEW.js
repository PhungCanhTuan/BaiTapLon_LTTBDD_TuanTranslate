import React from 'react';
import { View, Text, Pressable, ScrollView, FlatList, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const VIP_SGKNEW = ({navigation}) => {
    const data= [
        {
            id: 1,
            name: 'Lớp 2 mới',
            image: require('../../../assets/images/lop3.png')
        },

        {
            id: 2,
            name: 'Lớp 3 mới',
            image: require('../../../assets/images/lop3n.png')
        },
        
        {
            id: 3,
            name: 'Lớp 4 mới',
            image: require('../../../assets/images/lop4n.png')
        },

        {
            id: 4,
            name: 'Lớp 5 mới',
            image: require('../../../assets/images/lop5n.png')
        },

        {
            id: 5,
            name: 'Lớp 6 mới',
            image: require('../../../assets/images/lop6n.png')
        },

        {
            id: 6,
            name: 'Lớp 7 mới',
            image: require('../../../assets/images/lop7n.png')
        },

        {
            id: 7,
            name: 'Lớp 8 mới',
            image: require('../../../assets/images/lop8n.png')
        },

        {
            id: 8,
            name: 'Lớp 9 mới',
            image: require('../../../assets/images/lop9n.png')
        },

        {
            id: 9,
            name: 'Lớp 10 mới',
            image: require('../../../assets/images/lop10n.png')
        },

        {
            id: 10,
            name: 'Lớp 11 mới',
            image: require('../../../assets/images/lop11n.png')
        },
    ]

    const renderItem = ({item}) => (
        <View style={styles.viewItem}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.img} source={item.image} ></Image>
                <Text style={styles.textName} >  {item.name}</Text>
            </View>

            <View style={{alignItems: 'center', margin: 10}}>
                <Pressable style={styles.btn}>
                    <Text style={styles.textBtn}> Luyện tập </Text>
                </Pressable>
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

                <Text style={styles.nameHeader}>Từ vựng VIP SGKN</Text>
            </View>

            <ScrollView style={styles.body}>
                <Text style={styles.textGT}>Các gói từ vựng VIP được biên soạn theo sách giáo khoa chuẩn.</Text>
                <Text style={[styles.textGT, {marginLeft: 10, marginTop: 5}]}> 
                    <FontAwesomeIcon icon={faCircle} size={8} /> {' '}
                    Có hình ảnh minh họa, phát âm chuẩn. {'\n'}
                    <FontAwesomeIcon icon={faCircle}  size={8} /> {' '}
                    Đặc biệt có game giúp các em học từ vựng nhanh. {'\n'}
                </Text>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                ></FlatList>
            </ScrollView>

        </View>

        
    );
};