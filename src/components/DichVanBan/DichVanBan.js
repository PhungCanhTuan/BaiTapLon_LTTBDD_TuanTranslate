import React, { useState } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { SafeAreaView } from 'react-native-web';
import { text } from '@fortawesome/fontawesome-svg-core';

export const DichVanBan = ({navigation}) => {
    const [inputText,setInputText] = useState()
    const handleClearInput = () => {
        setInputText('');
      }
    const [inputTxt,setInputTxt] = useState('')
    
    const DATA = [
    {
        inputText: 'Good morning',
        nghia:'Chào buổi sáng'
    },
    {
        inputText: 'Good bye',
        nghia:'Chào tạm biệt'
    },
    {
        inputText: 'See you again',
        nghia:'Hẹn gặp lại'
    },
    ]

    const Item = ({inputText,nghia})=>(
        <View style={styles.footertWrapper}>
            <View style={styles.resultWrapper}>
                <Text style={[styles.resultTxt, {color:"rgba(1, 86, 167, 1)"}]}>{inputText}</Text>
                <Text style={styles.resultTxt}>{nghia}</Text>
            </View>
            <View style={styles.iconWrapper}>
                <Image style={{width:32,height:26}} source={require("../../../assets/images/volume-high-solid 6.png")}></Image>
                <Image style={{width:32,height:27}} source={require("../../../assets/images/star-regular 6.png")}></Image>
            </View>
            <View style={{marginTop:3}}></View>
        </View>
    )
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.preWrapper} onPress={()=>{navigation.navigate('Home')}}>
                    <Image style={styles.preImg} source={require("../../../assets/images/preImg.png")}></Image>
                    <Text style={styles.preTxt}>Trang chủ</Text>
                </Pressable>
                <Text style={styles.headerTxt}>Dịch văn bản</Text>
            </View>

            <View style={styles.bodyWrapper}>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.inputTxt} placeholder="Nhập cụm từ, câu văn hoặc đoạn văn để dịch"  value={inputText}
                        onChangeText={(text) => setInputText(text)} ></TextInput>
                </View>

                <Pressable style={styles.inputIcon} onPress={handleClearInput}>
                    <Image style={styles.inputIcon} source={require("../../../assets/images/xmark-solid 1.png")}></Image>
                    {/* <FontAwesomeIcon style={{zIndex:10}} size={222} icon={faXmark} /> */}
                </Pressable>

                <View style={styles.optionWrapper}>
                    <TouchableOpacity style={styles.optionImg}>
                        <Image style={{width:26,height:27}} source={require("../../../assets/images/download-solid 1.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionImg}>
                        <Image style={{width:20,height:27}} source={require("../../../assets/images/microphone-solid 2.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionImg}>
                        <Image style={{width:26,height:27}} source={require("../../../assets/images/image-regular 2.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionImg}>
                        <Image style={{width:28,height:27}} source={require("../../../assets/images/camera-solid 2.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnChoiceWrapper}>
                    <TouchableOpacity style={styles.btnWrapper} onPress={
                        ()=>{
                            setInputTxt(inputText)
                        }
                    }>
                        <Text style={styles.btnTxt}>Anh - Việt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={
                        ()=>{
                            setInputTxt(inputText)
                        }}>
                        <Text style={styles.btnTxt}>Việt - Anh</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.optionImg, styles.optionImgTrash]}>
                    <Image style={{width:28,height:27}} source={require("../../../assets/images/trash-can-regular 2.png")}></Image>
                </TouchableOpacity>


                {/* <View style={styles.footertWrapper}>
                    <View style={styles.resultWrapper}>
                        <Text style={[styles.resultTxt, {color:"rgba(1, 86, 167, 1)"}]}>{inputTxt}</Text>
                        <Text style={styles.resultTxt}>Chào mọi người</Text>
                    </View>
                    <View style={styles.iconWrapper}>
                        <Image style={{width:32,height:26}} source={require("../../../assets/images/volume-high-solid 6.png")}></Image>
                        <Image style={{width:32,height:27}} source={require("../../../assets/images/star-regular 6.png")}></Image>
                    </View>
                </View> */}
            </View>

            <View>
                <FlatList
                    data={DATA}
                    renderItem={({item})=> <Item inputText={item.inputText} nghia={item.nghia} ></Item>}
                ></FlatList>
            </View>
        </View>
     );
}
