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
        // justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10 
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
        // fontFamily: 'Inder',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 20,
    },

    textBack: {
        // fontFamily: 'Inder',
        fontSize: 18,
        color: '#FFFFFF',
        opacity: 0.7
    },

    body: {
        marginLeft: 8, 
        marginRight: 8,
        marginTop: 70,
        marginBottom: 35
    },

    textGT: {
        marginTop: 5,
        // fontFamily: 'Inder',
        fontSize: 16,
    },

    viewItem: {
        backgroundColor: '#FAFAFA',
        height: 250,
        width: '100%',
        borderRadius: 8,
        marginTop: 8,
    },

    viewNameKey: {
        height: 48,
        width: 88, 
        borderRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },

    textNameKey: {
        // fontFamily: 'Inder',
        fontSize: 18,
        color: '#FFFFFF'
    },

    textName: {
        // fontFamily: 'Inder',
        fontSize: 16,
        color: '#000000',
        marginLeft: 10,
        fontWeight: '600'
    },

    viewContent: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
    },

    textContent: {
        // fontFamily: 'Inder',
        fontSize: 15,
        color: '#000000',
    },

    btn: {
        height: 45,
        width:119,
        backgroundColor: '#0156A7',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});