import React from 'react';
import { View, Text, Pressable, FlatList, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Vip_Practice = ({navigation}) => {

    const data= [
        {
            id: 1,
            name: 'Từ vựng Oxford',
            colorBtn: '#032349',
            name_Key: 'Oxford',
            content: 'Tập hợp những từ vựng thường gặp trong giao tiếp theo Oxford. Bộ gồm 3000 từ vựng quan trọng đã được chọn lựa bởi một nhóm 70 chuyên gia của Oxford. Theo Oxford nếu bạn học hết bộ từ này thì bạn sẽ giao tiếp được theo tiếng Anh mức độ cơ bản.'
        },

        {
            id: 2,
            name: 'Từ vựng luyện thi TOEIC',
            colorBtn: '#0156A7',
            name_Key: 'TOEIC',
            content: 'Tập hợp những từ vựng hay xuất hiện trong các đề thi TOEIC. Bộ từ vựng luyện thi TOEIC gồm 600 từ vựng tiếng Anh thiết yếu nhất sẽ là nền tảng giúp bạn đạt được những điểm cao trong kỳ thi TOEIC'
        },

        {
            id: 3,
            name: 'Từ vựng luyện thi IELTS',
            colorBtn: '#840820',
            name_Key: 'IELTS',
            content: 'Tập hợp những từ vựng hay xuất hiện trong các đề thi IELTS. Bộ từ vựng IELTS gồm 900 từ thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi IELTS.'
        },

        {
            id: 4,
            name: 'Từ vựng luyện thi TOEFL',
            colorBtn: '#00397C',
            name_Key: 'TOEFL',
            content: 'Tập hợp những từ vựng hay xuất hiện trong các đề thi TOEFL. Bộ từ vựng TOEFL gồm 900 từ thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi TOEFL.'
        },

        {
            id: 5,
            name: 'Từ vựng luyện thi SAT',
            colorBtn: '#0287D4',
            name_Key: 'SAT',
            content: 'Tập hợp những từ vựng hay xuất hiện trong các đề thi SAT. Bộ từ vựng SAT gồm 900 từ thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi SAT.'
        },
    ]

    const renderItem = ({item}) => (
        <View style={styles.viewItem}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.viewNameKey,{backgroundColor: item.colorBtn}]}>
                    <Text style={styles.textNameKey}> {item.name_Key} </Text>
                </View>

                <Text style={styles.textName} >  {item.name}</Text>
            </View>

            <View style={styles.viewContent}>
                <Text style={styles.textContent}>{item.content} </Text>
            </View>

            <View style={{alignItems: 'center', margin: 10}}>
                <Pressable style={styles.btn}>
                    <Text style={styles.textNameKey}> Luyện tập </Text>
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

                <Text style={styles.nameHeader}>Từ vựng VIP LT</Text>
            </View>

            <ScrollView style={styles.body}>
                <Text style={styles.textGT}>Các gói từ vựng VIP được chọn lọc và biên soạn cẩn thẩn theo từng chủ đề, nội dung sẽ chất lượng hơn hẳn so với các danh sách từ vựng ở mục [Gói từ miễn phí].</Text>
                <Text style={[styles.textGT, {marginLeft: 10, marginTop: 5}]}> 
                    <FontAwesomeIcon icon={faCircle} size={8} /> {' '}
                    Có hình ảnh minh họa, phát âm chuẩn. {'\n'}
                    <FontAwesomeIcon icon={faCircle}  size={8}/> {' '}
                    Có ví dụ song ngữ. {'\n'}
                    <FontAwesomeIcon icon={faCircle}  size={8} /> {' '}
                    Đặc biệt có game giúp bạn học từ vựng nhanh. {'\n'}
                    <FontAwesomeIcon icon={faCircle}  size={8} /> {' '}
                    Mỗi gói từ VIP sẽ được chia thành nhiều bài học nhỏ, mỗi bài sẽ có một số lượng từ vựng nhất định theo từng chủ đề giúp bạn dễ dàng luyện tập.
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