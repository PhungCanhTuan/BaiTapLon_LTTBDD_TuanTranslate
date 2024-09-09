import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { CheckBox } from 'react-native-web';

export const CaiDat = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.preWrapper} onPress={()=>{navigation.navigate('Home')}}  >
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}> Trang chủ </Text>
                </Pressable>
                <Text style={styles.headerTxt}>Cài đặt</Text>
            </View>

            <Pressable style={styles.pngWrapper}><Image style={{height:16,width:16}} source={require("../../../assets/images/icon _alarm clock bold_.png")}></Image></Pressable>
            <View style={styles.scheduleWrapper}>
                <View style={styles.rowWrapper}>
                    <Text style={{paddingLeft:30}}>Nhắc nhở học từ vựng</Text>
                    <CheckBox></CheckBox>
                </View>
                <View style={styles.rowWrapper}>
                    <Text>Thư mục nhắc nhở</Text>
                    <Text>Tất cả thư mục</Text>
                </View>
                <View style={styles.rowWrapper}>
                    <Text>Số lần trong ngày</Text>
                    <Text>1</Text>
                </View>
                <View style={styles.rowWrapper}>
                    <Text>Thời điểm bắt đầu</Text>
                    <Text>07:00</Text>
                </View>
                <View style={styles.rowWrapper}>
                    <Text>Thời điểm dừng</Text>
                    <Text>21:00</Text>
                </View>
                <View style={styles.rowWrapper2}>
                    <Text>Ngày nhắc trong tuần</Text>
                    <View style={styles.dayWrapper}><Text style={{color:'white'}}>2, 3, 4, 5, 6, 7, CN</Text></View>
                </View>
                <View style={styles.rowWrapperGhiChu}>
                    <Text style={styles.txtGhiChu}>*Bạn có thể không nhận được lời nhắn khi điện thoại
                        đang ở chế độ tiết kiệm pin
                    </Text>
                    <Text style={styles.txtGhiChu}>
                        *Bạn sẽ không nhận được nhắc nhở nếu bạn không mở 
                        app trong vòng 30 ngày
                    </Text>
                </View>
            </View>
            <View style={styles.scheduleWrapper}>
                <View style={styles.rowWrapperGopY}>
                    <Text style={styles.txtGopY}>Báo lỗi hoặc góp ý</Text>
                    <Text style={styles.txtGopY}>Những câu hỏi thường gặp</Text>
                    <Text style={styles.txtGopY}>Kiểm tra dữ liệu offline</Text>
                </View>
            </View>
            <Pressable style={styles.pngWrapper1}><Image style={{height:16,width:16}} source={require("../../../assets/images/2icon _sound high_.png")}></Image></Pressable>
            <View style={styles.scheduleWrapper}>
                <View style={styles.rowWrapperSpeed}>
                    <Text>Tốc độ phát âm</Text>
                </View>
                <View style={styles.rowWrapperSpeed}>
                    <View style={styles.rowWrapper3}>
                        <TouchableOpacity style={styles.radioButton}>
                        </TouchableOpacity>
                        <Text>Chậm hơn</Text>
                    </View>
                    <View style={styles.rowWrapper3}>
                        <TouchableOpacity style={styles.radioButton}>
                        </TouchableOpacity>
                        <Text>Chậm</Text>
                    </View>
                    <View style={styles.rowWrapper3}>
                        <TouchableOpacity style={styles.radioButton}>
                        </TouchableOpacity>
                        <Text>Bình thường</Text>
                    </View>
                </View>
                <View style={styles.rowWrapperSpeed}>
                    <Text>Tốc độ phát âm</Text>
                </View>
                <View style={styles.rowWrapperSpeed}>
                    <View style={styles.rowWrapper3}>
                        <TouchableOpacity style={styles.radioButton}>
                        </TouchableOpacity>
                        <Text>Anh anh</Text>
                    </View>
                    <View style={styles.rowWrapper3}>
                        <TouchableOpacity style={styles.radioButton}>
                        </TouchableOpacity>
                        <Text>Anh Mỹ</Text>
                    </View>
                </View>
                <View style={styles.rowWrapperSpeed}>
                    <Text>Tự động phát âm khi tra từ</Text>
                </View>
                <View style={styles.rowWrapperSpeed}>
                    <View style={styles.rowWrapper3}>
                        <CheckBox></CheckBox>
                        <Text style={{paddingLeft:4}}>Tự động phát âm</Text>
                    </View>
                </View>
            </View>
        </View>
     );
}

