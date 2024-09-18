// import React, {useState, useEffect} from 'react';
// import { View, Text, Pressable, ScrollView, TextInput} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faChevronLeft, faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons';
// import { useFonts } from 'expo-font';
// import { styles } from './style';

// export const Dictionary_AnhViet = ({navigation}) => {

//     const [data, setData] = useState([]);
//     const [searchKeyword, setSearchKeyword] = useState('');

//     // useEffect(() => {
//     //     fetch('https://656046a683aba11d99d0843a.mockapi.io/apiTuDien')
//     //     .then(response => response.json())
//     //     .then(json => {
//     //         setData(json);
//     //     })
//     // }, [])
//     useEffect(() => {
//         // Fetch dữ liệu từ cả hai API
//         Promise.all([
//             fetch('https://656046a683aba11d99d0843a.mockapi.io/apiTuDien').then(response => response.json()),
//             fetch('https://66ceef66901aab2484203573.mockapi.io/apiTuDien/apiTuDien').then(response => response.json())
//         ])
//         .then(([data1, data2]) => {
//             // Kết hợp dữ liệu từ cả hai API
//             const combinedData = [...data1, ...data2];
//             setData(combinedData);
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     }, []);

//     const filteredData = data.filter(item =>
//         item.mean.toLowerCase().includes(searchKeyword.toLowerCase()) ||
//         item.english.toLowerCase().includes(searchKeyword.toLowerCase())

//     );
//     console.log(filteredData);
//     const renderItem = (item) => (
//         <View key={item.id} style={{alignItems: 'center'}}>
//             <Pressable  style={styles.btnViewItem} onPress={()=>{
//                 navigation.navigate('Translate_Dictionary', {english: item.english, mean: item.mean, cntEng: item.cntEng, cntViet: item.cntViet, p: item.p})
//             }}>
//                 <Text style={styles.textName}>{item.mean}</Text>
//             </Pressable>
//         </View>
//     )

//     return (
//         <View style={styles.container}>
//             <View style={styles.header} >
//                 <Pressable style={styles.back} onPress={()=>{navigation.navigate('Home')}}>
//                     <FontAwesomeIcon size={25} color='#FFFFFF' icon={faChevronLeft} />
//                     <Text style={styles.textBack}>Trang chủ</Text>
//                 </Pressable>

//                 <Text style={styles.nameHeader}>Từ điển Việt Anh</Text>
//             </View>

//             <View style={{alignItems: 'center'}}>
//                 <View style={styles.viewSearchInput}>
//                     <FontAwesomeIcon style={{zIndex: 0, marginRight: -30, opacity: 0.5}} size={20} icon={faMagnifyingGlass} />
//                     <TextInput style={styles.searchInput} placeholder='Nhập từ tiếng việt' onChangeText={ text => setSearchKeyword(text)} value={searchKeyword} ></TextInput>
//                     <FontAwesomeIcon style={{marginLeft: -30, opacity: 0.5}} size={20} icon={faMicrophone} />
//                 </View>
//             </View>

            
//             <ScrollView style={styles.body}>
//                 {
//                     filteredData.map(renderItem)
//                 }
//             </ScrollView>
           
//         </View>
//     );
// };

import React, {useState, useEffect} from 'react';
import { View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';

export const Dictionary_AnhViet = ({navigation}) => {

    const [data, setData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        // Fetch dữ liệu từ cả hai API
        Promise.all([
            fetch('https://656046a683aba11d99d0843a.mockapi.io/apiTuDien').then(response => response.json()),
            fetch('https://66ceef66901aab2484203573.mockapi.io/apiTuDien/apiTuDien').then(response => response.json())
        ])
        .then(([data1, data2]) => {
            // Kết hợp dữ liệu từ cả hai API
            const combinedData = [...data1, ...data2];
            setData(combinedData);
            console.log('Fetched Data:', combinedData); // Kiểm tra dữ liệu từ API
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const filteredData = data.filter(item =>
        item.mean.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.english.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    console.log('Filtered Data:', filteredData);

    // const renderItem = (item) => (
    //     <View key={item.id} style={{ alignItems: 'center', marginVertical: 10  }}>
    //         <Pressable
    //             style={styles.btnViewItem}
    //             onPress={() => {
    //                 // Điều hướng đến màn hình chi tiết từ điển
    //                 navigation.navigate('Translate_Dictionary', {
    //                     english: item.english,
    //                     mean: item.mean,
    //                     cntEng: item.cntEng,
    //                     cntViet: item.cntViet,
    //                     p: item.p
    //                 });
    //             }}
    //         >
    //             <Text style={styles.textName}>{item.mean}</Text> {/* Hiển thị nghĩa tiếng Việt */}
    //         </Pressable>
    //     </View>
    // );

    const renderItem = (item, index) => (
    <View key={`${item.id}-${index}`} style={{ alignItems: 'center' }}>
        <Pressable
            style={styles.btnViewItem}
            onPress={() => {
                navigation.navigate('Translate_Dictionary', {
                    english: item.english,
                    mean: item.mean,
                    cntEng: item.cntEng,
                    cntViet: item.cntViet,
                    p: item.p
                });
            }}
        >
            <Text style={styles.textName}>{item.mean}</Text> {/* Hiển thị nghĩa tiếng Việt */}
        </Pressable>
    </View>
);

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.back} onPress={() => { navigation.navigate('Home') }}>
                    <FontAwesomeIcon size={25} color='#FFFFFF' icon={faChevronLeft} />
                    <Text style={styles.textBack}>Trang chủ</Text>
                </Pressable>

                <Text style={styles.nameHeader}>Từ điển Việt Anh</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.viewSearchInput}>
                    <FontAwesomeIcon style={{ zIndex: 0, marginRight: -30, opacity: 0.5 }} size={20} icon={faMagnifyingGlass} />
                    {/* <TextInput
                        style={styles.searchInput}
                        placeholder='Nhập từ tiếng việt'
                        onChangeText={text => setSearchKeyword(text)}
                        value={searchKeyword}
                    /> */}
                    <TextInput
        style={styles.searchInput}
        placeholder='Nhập từ tiếng việt'
        onChangeText={text => {
            setSearchKeyword(text);
            console.log('Search Keyword:', text); // Kiểm tra giá trị từ khoá tìm kiếm
        }}
        value={searchKeyword}
    />
                    <FontAwesomeIcon style={{ marginLeft: -30, opacity: 0.5 }} size={20} icon={faMicrophone} />
                </View>
            </View>


            <ScrollView style={styles.body}>
    {filteredData.length > 0 ? (
        filteredData.map((item, index) => renderItem(item, index)) // Sử dụng cả item và index để tạo key
    ) : (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: 'gray' }}>Không tìm thấy kết quả</Text> {/* Thông báo nếu không có kết quả */}
        </View>
    )}
</ScrollView>

        </View>
    );
};
