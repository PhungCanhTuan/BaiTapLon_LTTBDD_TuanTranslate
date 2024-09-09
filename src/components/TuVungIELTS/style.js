import { cloneElement } from 'react';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E6E6E6',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerWrapper:{
        width:"100%",
        // height:100,
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
        fontWeight:300,
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
        marginLeft:20,
    },
    bodyWrapper:{
        width:"100%",
        alignItems:"center",
    },
    searchWrapper:{
        width:"97%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"background: rgba(255, 255, 255, 1)",
        padding:0,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
        position:'relative'
    },
    pngSearchWrapper:{
        width:20,
        height:20, 
        paddingLeft:20,
        position:'absolute',
        top:24,
        left:29,
        zIndex:1
    },
    timKiemTxt:{
        // marginLeft:20,
        // fontFamily:"Inter",
        // fontWeight:400,
        fontSize:16,
        lineHeight:19,
        height:50,
        width:"100%",
        paddingLeft:60,
    },
    ItemWrapper:{
        width:"100%",
        backgroundColor:"rgba(255, 255, 255, 1)",
        borderRadius:10,
        marginTop:1,
        padding:10,
        // width:357,
    },
    tu:{
        // fontFamily:"Inter",
        fontWeight: 'bold',
        fontSize:18 ,
        minWidth:357
    },
    phienAmWrapper:{
        flexDirection:"row",
        alignItems:"center",
    },
    phienAm:{
        width:"70%",
        marginLeft:10,
    },
    loaWrapper: {
        width:30,
        height:30,
        backgroundColor:"rgba(1, 86, 167, 1)",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },
    pngLoa:{
        width:28,
        height:28,
        marginTop:6
    },
    starWrapper:{

    },
    pngStar:{
        width:30,
        height:30
    },

    iconWrapper:{
        width:"20%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    footerWrapper:{
        width:98+"%",
        flexDirection:"column",
        alignItems:"center",
        position:"fixed",
        bottom:0,
        backgroundColor:"rgba(231, 230, 230, 1)",
        padding:10,
    },
    btnWrapper:{
        backgroundColor:"background: rgba(1, 86, 167, 1)",
        width:"100%",
        height:44,
        borderRadius:20,
        justifyContent:'center',
        alignItems:"center",

    },
    btnWrapper2:{
        width:356,  
        height:44,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        marginTop:10,
        paddingLeft:10,
        paddingRight:10,
    },
    btnWrapper3:{
        marginLeft:8,
        marginRight:8,
        backgroundColor:"background: rgba(1, 86, 167, 1)",
        borderRadius:20,
        height:44,
        justifyContent:'center',
        alignItems:"center",
        width:"33%"
    },
    btnTxt:{
        color:'background: rgba(255, 255, 255, 1)',
    },

    footer: {
        width: '100%',
        height: 120,
        backgroundColor: '#E6E6E6',
        flexDirection: 'row',
        position:"fixed",
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-around',
        zIndex: 1,
    },

    buttonFooter: {
        width: 85, 
        height: 42,
        borderRadius: 8,
        backgroundColor: '#0156A7',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    textFooter: {
        fontSize: 16,
        color: '#FFFFFF',
    }
})