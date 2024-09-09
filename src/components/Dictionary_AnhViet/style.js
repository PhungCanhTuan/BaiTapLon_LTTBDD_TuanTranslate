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

    nameHeader: {
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 20,
    },

    textBack: {
        fontSize: 18,
        color: '#FFFFFF',
        opacity: 0.7
    },

    body: {
        marginLeft: 8, 
        marginRight: 8,
        marginTop: 8,
        marginBottom: 35
    },

    textName: {
        fontSize: 16,
        color: '#000000',
        marginLeft: 20,
        fontWeight: '600'
    },

    viewSearchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 80,
    },

    searchInput: {
        height: 50,
        width: 375,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        paddingLeft: 40,
        fontSize: 18,
        // opacity: 0.5,
    },

    btnViewItem: {
        width: 375,
        height:50,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        marginTop: 1,
        justifyContent: 'center',
    },
});