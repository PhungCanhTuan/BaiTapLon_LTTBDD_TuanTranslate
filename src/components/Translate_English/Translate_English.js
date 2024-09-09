import React, { useState, useEffect } from 'react';
import { View, Text, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil, faCircle  } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import { styles } from './style';

export const Translate_English = ({route, navigation}) => {
    const { english} = route.params;
    // const english = 'apple'
    
    const [data, setData] = useState([]); 

    const [mean, setMean] = useState(null);
    const [cntEng, setCntEng] = useState(null);
    const [cntViet, setCntViet] = useState(null);
    const [p, setP] = useState(null);

    const [isMeanInitialized, setIsMeanInitialized] = useState(false);
    
    //https://66ceef66901aab2484203573.mockapi.io/apiTuDien/apiTuDien
    // useEffect(() => {
    //     fetch('https://656046a683aba11d99d0843a.mockapi.io/apiTuDien')
    //     .then(response => response.json())
    //     .then(json => {
    //         setData(json);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }, [])
    useEffect(() => {
        // Fetch từ cả hai API
        Promise.all([
            fetch('https://656046a683aba11d99d0843a.mockapi.io/apiTuDien').then(response => response.json()),
            fetch('https://66ceef66901aab2484203573.mockapi.io/apiTuDien/apiTuDien').then(response => response.json())
        ])
        .then(([data1, data2]) => {
            // Kết hợp dữ liệu từ cả hai API
            const combinedData = [...data1, ...data2];
            setData(combinedData);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (data.length === 0) {
          return;
        }
      
        const foundItem = data.find(item => item.english.trim().toLowerCase() === english.trim().toLowerCase());
        
        // console.log(foundItem);

        if (foundItem) {
            setMean(foundItem.mean);
            setCntEng(foundItem.cntEng);
            setCntViet(foundItem.cntViet);
            setP(foundItem.p);
            setIsMeanInitialized(true);
        } else {
            setMean(english);
            setCntEng("");
            setCntViet("");
            setP("");
            setIsMeanInitialized(true);
        }
      }, [data, english]);

    // console.log(mean);
    // console.log(cntEng);
    // console.log(cntViet);
    // console.log(p);

    //them api recent words: cũ: https://656046a683aba11d99d0843a.mockapi.io/apiTuDienRecent
    const addNewPost = async () => {
        try {
            const response = await fetch('https://66ceef66901aab2484203573.mockapi.io/apiTuDien/apiTuDienRecent', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ english: english, mean: mean, p: p }),
            });
        
            if (response.ok) {
                console.log('Dữ liệu đã được thêm thành công');
            } else {
                console.error('Đã có lỗi xảy ra khi thêm dữ liệu');
            }
        } catch (error) {
            console.error('Đã có lỗi xảy ra:', error);
        }
    };

    useEffect(() => {
        console.log(mean);
        if (isMeanInitialized) {
            addNewPost();
        }
        return () => clearInterval();
    }, [isMeanInitialized]); 
    
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
                    <FontAwesomeIcon size={25} style={styles.icon} icon={faArrowLeft} />
                    <Text style={styles.textBack}> {english} </Text>
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
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textMean}>{english.toLowerCase()}</Text>
                        <Text style={styles.textP}> {p} </Text>     
                    </View>
               
                    <View style={styles.viewMean}>
                        <FontAwesomeIcon color='violet' size={16} icon={faArrowRight} />
                        <Text style={styles.textEnglish}>{mean}</Text>
                        
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.textDT}><FontAwesomeIcon size={12} icon={faCircle} />   {cntEng}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.textDT}><FontAwesomeIcon size={16} icon={faArrowRight} />   {cntViet}</Text>
                    </View>
               
                </View>

                

            </View>

        </View>
    );
};