import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E6E6E6',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent:'center'
    },
    headerWrapper:{
        width:"100%",
        height: 70,
        backgroundColor:"rgba(1, 86, 167, 1)",
        flexDirection:"row",
        alignItems:"center",
    },
    preWrapper:{
        flexDirection:"row",
        justifyContent:"flex-start",
        marginLeft:10,
        alignItems: 'center'
    },
    preImg:{
        width:12,
        height:20
    },
    preTxt:{
        // fontFamily:"Inter",
        // fontWeight:300,
        fontSize:18,
        color:"#FFFFFF",
        opacity:0.8,
        marginLeft:4
    },
    headerTxt:{
        // fontFamily:"Inter",
        // fontWeight:400,
        fontSize:20,
        color:"#ffffff",
        marginLeft:10,
    },
    ItemWrapper:{
        width:96+"%",
        backgroundColor:"background: rgba(255, 255, 255, 1)",
        borderRadius:8,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        padding:10,
    },
    ItemHeader:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        marginLeft:10,
        marginTop:10,
    },
    ItemPng:{
        width:32,
        height:31,
        borderRadius:10,
    },
    ItemTitle:{
        // fontFamily:"Inter",
        fontWeight: 'bold',
        fontSize:18,
        color:"rgba(0, 0, 0, 1)",
        marginLeft:10,
        width:80+"%",
    },
    descriptionWrapper:{
        width:94+"%",
        marginLeft:10,
        marginTop:10,
    },
    descriptionTxt:{
        // fontFamily:"Inter",
        fontWeight:400,
        fontSize:16,
        color:"rgba(0, 0, 0, 1)",
        opacity:0.8,
        marginLeft:10,
    },
    ItemButton:{
        width:14,
        height:6,
        marginLeft:10,
    }
});