import React, { useState } from 'react';
import { View, Text, Image, Pressable, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { styles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMobileScreen, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

export const Screen_Home = ({ navigation }) => {
    const [text, setText] = useState('');

    const handleTextSubmit = () => {
        navigation.navigate('Translate_English', { english: text });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => {/* Open menu */}} style={styles.menuButton}>
                    <FontAwesomeIcon size={24} icon={faBars} color="#FFFFFF" />
                </Pressable>
                <Text style={styles.headerTitle}>TuanTranslate</Text>
                <Image style={styles.headerIcon} source={require('../../../assets/images/10.png')} />
            </View>

            <View style={styles.searchSection}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Tìm kiếm từ vựng...'
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={handleTextSubmit}
                />
                <Pressable style={styles.searchButton} onPress={handleTextSubmit}>
                    <FontAwesomeIcon size={20} icon={faMagnifyingGlass} />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.featuresRow}>
                    <Feature icon={faMobileScreen} label="Dịch màn hình" onPress={() => {/* Handle navigation */}} />
                    <Feature icon={faCamera} label="Dịch máy ảnh" onPress={() => {/* Handle navigation */}} />
                    <Feature icon={faImage} label="Dịch hình ảnh" onPress={() => {/* Handle navigation */}} />
                </View>

                <FeatureButton icon={require('../../../assets/images/6.png')} label="Từ đã tra" onPress={() => navigation.navigate('Recent_Words')} />
                <FeatureButton icon={require('../../../assets/images/1.png')} label="Từ điển Việt Anh" onPress={() => navigation.navigate('Dictionary_AnhViet')} />
                <FeatureButton icon={require('../../../assets/images/3.png')} label="Từ vựng luyện thi VIP" onPress={() => navigation.navigate('Vip_Practice')} />
                <FeatureButton icon={require('../../../assets/images/3.png')} label="Từ vựng VIP SGK" onPress={() => navigation.navigate('VIP_SGK')} />
                <FeatureButton icon={require('../../../assets/images/3.png')} label="Từ vựng VIP SGK mới" onPress={() => navigation.navigate('VIP_SGKNEW')} />
                <FeatureButton icon={require('../../../assets/images/2.png')} label="Dịch văn bản" onPress={() => navigation.navigate('DichVanBan')} />
                <FeatureButton icon={require('../../../assets/images/9.png')} label="Ứng dụng học tiếng Anh khác" onPress={() => navigation.navigate("UngDungHocTiengAnhKhac")} />

                <View style={styles.packageSection}>
                    <Text style={styles.packageTitle}>Gói từ miễn phí</Text>
                    <View style={styles.packageOptions}>
                        <View>
                            <Pressable onPress={() => navigation.navigate('DongTuBatQuyTac')}>
                                <Text style={styles.packageItem}>Động từ bất quy tắc</Text>
                            </Pressable>
                            <Pressable style={styles.packageItemMargin} onPress={() => navigation.navigate('TuVungIELTS')}>
                                <Text style={styles.packageItem}>Từ vựng IELTS</Text>
                            </Pressable>
                        </View>
                        <View style={styles.packageColumn}>
                            <Pressable onPress={() => navigation.navigate('TuVungToeic')}>
                                <Text style={styles.packageItem}>Từ vựng TOEIC</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <FeatureButton icon={require('../../../assets/images/5.png')} label="Cài đặt" onPress={() => navigation.navigate('CaiDat')} />
            </ScrollView>
        </SafeAreaView>
    );
};

const Feature = ({ icon, label, onPress }) => (
    <Pressable style={styles.featureItem} onPress={onPress}>
        <FontAwesomeIcon icon={icon} size={30} color="#FFFFFF" />
        <Text style={styles.featureLabel}>{label}</Text>
    </Pressable>
);

const FeatureButton = ({ icon, label, onPress }) => (
    <Pressable style={styles.buttonItem} onPress={onPress}>
        <Image style={styles.buttonIcon} source={icon} />
        <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
);
