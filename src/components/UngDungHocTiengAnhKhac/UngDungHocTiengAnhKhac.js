import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const DATA= [
    {
        id:1,
        linkImg:require("../../../assets/images/image 1.png"),
        title:"Học tiếng Anh hàng ngày",
        description:"Ghi lại giọng nói của bạn và kiểm tra xem\n" +
        "Chơi trò chơi từ vựng.\n"+
        "Học bằng nhiều video hữu ích khác.\n"
    },
    {
        id:2,
        linkImg:require("../../../assets/images/image 2.png"),
        title:"Học ngữ pháp tiếng Anh",
        description:"Chủ đề đa dạng dùng offline.\n"+
        "Nhiều bài tập trắc nghiệm, cho phép tra\n"+
        "Nhiều danh ngôn, thành ngữ, truyện cười "
    },
    {
        id:3,
        linkImg:require("../../../assets/images/image 3.png"),
        title:"Bài giải hay SGK, Sách bài tập",
        description:"Không cần mua sách giải, sách bài tập, sách giáo khoa nữa. Đã có app SGK cho phép bạn tra bài học, giải một cách nhanh chóng.\n"+
        "Không cần mạng Internet, bạn có thể tra mọi bài giải mọi lúc mọi nơi."
    },
    {
        id:4,
        linkImg:require("../../../assets/images/image 4.png"),
        title:"Học tiếng Anh với BiBo",
        description:"BiBo là phần mềm học tiếng Anh được thiết kế thân thiện cho trẻ em, giúp bé học nói tiếng Anh theo phương pháp tương tác trực quan.\n"+
        "* Mỗi bài học bao gồm lượng từ vựng vừa phải, kèm theo âm thanh rõ ràng và hình ảnh dễ thương sinh động giúp bé ghi nhớ tốt hơn.\n"+
        "* Giúp bé có thể tự học mà không cần nhiều sự hỗ trợ của phụ huynh."
    },

]

const Item = ({id, linkImg, title, description }) => 
    (
        <View style={styles.ItemWrapper}>
            <View style={styles.ItemHeader}>
                <Image style={styles.ItemPng} source={linkImg}></Image>
                <Text style={styles.ItemTitle}>{title}</Text>
                <TouchableOpacity style={{padding:10}}>
                    <Image style={styles.ItemButton} source={require("../../../assets/images/Vector (2).png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.descriptionTxt}>{description}</Text>
            </View>
        </View>
    )

export const UngDungHocTiengAnhKhac =({navigation}) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.preWrapper} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </Pressable>
                <Text style={styles.headerTxt}>UD học tiếng anh khác</Text>
            </View>
            {/* render */}
            <FlatList style={{marginBottom: 30}}
                data={DATA}
                renderItem={({item}) => <Item id={item.id} linkImg={item.linkImg} title={item.title} description={item.description}></Item>}
            ></FlatList>
        </View>
     );
}
