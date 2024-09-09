import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    },

    header: {
        backgroundColor: '#0156A7',
        height: 70,
        flexDirection:'row',
        alignItems: 'center'
    },

    back: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },

    icon: {
        color: '#FFFFFF',
    },

    nameHeader: {
        // fontFamily: 'Inter',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 40
    },

    textBack: {
        // fontFamily: 'Inter',
        fontSize: 18,
        color: '#FFFFFF',
        opacity: 0.7
    },

    textInfo: {
        // fontFamily: 'Inter',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '400'
    },

    buttonLogin: {
        height: 60,
        width: 287,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        borderColor: '#000000',
        borderWidth: 1
    },

    textLogin: {
        // fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 'bold',
    },

    sizeImg: {
        height: 22,
        width: 22
    },

    body: {
        alignItems: 'center',
        marginTop: 180
    },
});