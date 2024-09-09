import React from 'react';
import { View, Text, Pressable, ScrollView ,FlatList, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft,faCircle  } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const VIP_SGK = ({navigation}) => {
    // const [font] = useFonts({
    //     'Inder': require('../../../assets/fonts/Inder-Regular.ttf'),
    // });

    const data= [
        {
            id: 1,
            name: 'Lớp 3',
            image: require('../../../assets/images/lop3.png'),
            content: 'Tập hợp những từ vựng Lớp 3 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 2,
            name: 'Lớp 4',
            image: require('../../../assets/images/lop4.png'),
            content: 'Tập hợp những từ vựng Lớp 4 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 3,
            name: 'Lớp 5',
            image: require('../../../assets/images/lop5.png'),
            content: 'Tập hợp những từ vựng Lớp 5 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 4,
            name: 'Lớp 6',
            image: require('../../../assets/images/lop6.png'),
            content: 'Tập hợp những từ vựng Lớp 6 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 5,
            name: 'Lớp 7',
            image: require('../../../assets/images/lop7.png'),
            content: 'Tập hợp những từ vựng Lớp 7 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 6,
            name: 'Lớp 8',
            image: require('../../../assets/images/lop8.png'),
            content: 'Tập hợp những từ vựng Lớp 8 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 7,
            name: 'Lớp 9',
            image: require('../../../assets/images/lop9.png'),
            content: 'Tập hợp những từ vựng Lớp 9 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 8,
            name: 'Lớp 10',
            image: require('../../../assets/images/lop10.png'),
            content: 'Tập hợp những từ vựng Lớp 10 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 9,
            name: 'Lớp 11',
            image: require('../../../assets/images/lop11.png'),
            content: 'Tập hợp những từ vựng Lớp 11 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },

        {
            id: 10,
            name: 'Lớp 12',
            image: require('../../../assets/images/lop12.png'),
            content: 'Tập hợp những từ vựng Lớp 12 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
        },
    ]

    const renderItem = ({item}) => (
        <View style={styles.viewItem}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.img} source={item.image} ></Image>
                <Text style={styles.textName} >  {item.name}</Text>
            </View>

            <View style={styles.viewContent}>
                <Text style={styles.textContent}>{item.content} </Text>
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

                <Text style={styles.nameHeader}>Từ vựng VIP SGK</Text>
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