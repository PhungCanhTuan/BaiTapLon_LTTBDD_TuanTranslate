import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil,faCircle  } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Translate_Dictionary = ({route, navigation}) => {
    const { english, mean, cntEng, cntViet, p } = route.params;
    // const english = 'True'
    // const mean = 'Đúng'
    // const cntEng = '1'
    // const cntViet = '2'
    

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Dictionary_AnhViet')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faArrowLeft} />
                    <Text style={styles.textBack}> {mean} </Text>
                </Pressable>

                <View style={styles.viewOP}>
                    <Pressable style={{height: 25, width: 25, justifyContent: 'center', alignItems: 'center', marginRight: 20}} onPress={()=>{navigation.navigate('Home')}} >
                        <FontAwesomeIcon  size={23} color='#FFFFFF' icon={faMagnifyingGlass} />
                    </Pressable>
                    <FontAwesomeIcon style={{marginRight: 20}} size={23} color='#FFFFFF' icon={faPencil} />
                    <FontAwesomeIcon style={{marginRight: 60}} size={23} color='#FFFFFF' icon={faStar} />
                </View>
            </View>

            <View style={styles.body}>
                <View style={{marginLeft: 10, marginTop: 25, marginRight: 5}}> 
                    <Text style={styles.textMean}>{mean}</Text>
                    {/* <Text style={[styles.textDT, {marginTop: 20}]}>danh từ</Text> */}
               
                    <View style={styles.viewMean}>
                        <FontAwesomeIcon color='violet' size={16} icon={faArrowRight} />
                        <Text style={styles.textEnglish}>{english}</Text>
                        <Text style={styles.textP}>{p}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.textDT}><FontAwesomeIcon size={16} icon={faArrowRight} />   {cntViet}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.textDT}><FontAwesomeIcon size={12} icon={faCircle} />   {cntEng}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};