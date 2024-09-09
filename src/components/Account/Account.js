import React from 'react';
import { View, Text, Pressable, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Account = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Tài khoản</Text>
            </View>

            <View>
                <Text style={styles.textInfo}> 
                    Hãy đăng nhập để backup [Từ của bạn] vài tài khoản đăng nhập hoặc tải [Từ của bạn] về từ tài khoản đăng nhập.
                </Text>
            </View>

            <View style={styles.body}> 
                <Pressable style={styles.buttonLogin}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <Text style={styles.textLogin}>   Đăng nhập bằng email</Text>
                </Pressable>

                <Pressable style={[styles.buttonLogin, {marginTop: 15}]}>
                    <Image style={styles.sizeImg} source={require('../../../assets/images/apple.png')} />
                    <Text style={styles.textLogin}>   Đăng nhập bằng Apple</Text>
                </Pressable>
            </View>

           
        </View>
    );
};