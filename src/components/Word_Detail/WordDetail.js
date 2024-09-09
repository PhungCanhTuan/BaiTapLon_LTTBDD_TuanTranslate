import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, ScrollView, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil, faCircle  } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const WordDetail = ({navigation, route}) => {
    // const {tu:tu,phienAm:phienAm,nghia:nghia, titleScreen:titleScreen} = route.params;
    const {tu:tu,phienAm:phienAm,nghia:nghia,p:p, pp:pp, titleScreen:titleScreen} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{
                    navigation.navigate(titleScreen)
                }} >
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faArrowLeft} />
                    <Text style={styles.textBack}>{tu}</Text>
                </Pressable>

                <View style={styles.viewOP}>
                    <FontAwesomeIcon style={{marginRight: 20}} size={23} color='#FFFFFF' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon style={{marginRight: 20}} size={23} color='#FFFFFF' icon={faPencil} />
                    <FontAwesomeIcon style={{marginRight: 60}} size={23} color='#FFFFFF' icon={faStar} />
                </View>
            </View>

            <View style={styles.body}>
                <View style={{marginLeft: 10, marginTop: 25, marginRight: 5}}> 
                    <Text style={styles.textMean}>{tu}</Text>
                    <View style={styles.viewMean}>
                        <FontAwesomeIcon color='violet' size={16} icon={faArrowRight} />
                        <Text style={styles.textEnglish}>{nghia}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.textDT}><FontAwesomeIcon size={12} icon={faCircle} /> {phienAm}</Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        {(p===null)? console.log('null') : <Text style={styles.textDT}><FontAwesomeIcon size={12} icon={faCircle} /> {p}</Text>}
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        {(pp==null)? console.log('null') : <Text style={styles.textDT}><FontAwesomeIcon size={12} icon={faCircle} /> {pp}</Text>}
                    </View>
                </View>
            </View>

        </View>
    );
};