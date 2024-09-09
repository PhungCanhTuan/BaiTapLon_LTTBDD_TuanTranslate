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
        zIndex:10
    },

    back: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },

    icon: {
        color: '#FFFFFF',
    },

    nameHeader: {
        // fontFamily: 'Inder',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 15,
    },

    textBack: {
        // fontFamily: 'Inder',
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 10
    },

    body: {
        backgroundColor: '#FaFaFa',
        width: '100%',
        height: 685,
        marginTop: 70
    },

    textMean: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',  
    },

    viewMean: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    textEnglish: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '600',
        // color: '#B96BD8',
        color: 'violet',
    },

    viewOP: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },

    textDT: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 10,
    },

    textP: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20
    },
    
    

});