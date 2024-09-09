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
        height:70,
        backgroundColor: "#0156A7",
        flexDirection:"row",
        alignItems:"center",
    },
    preWrapper:{
        flexDirection:"row",
        justifyContent:"flex-start",
        marginLeft:10,
        // backgroundColor: 'violet'
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
        // fontWeight: 400,
        fontSize:20,
        color: "#ffffff",
        marginLeft: 50,
    },
    scheduleWrapper:{
        backgroundColor:"rgba(255, 255, 255, 1)",
        margin:10,
        borderRadius:10,
        padding:10,
        fontSize:14,
        // fontFamily:400,
        // fontFamily:'Inter',
        position:'relative',
        width:"97%",
        marginBottom:0
    },
    rowWrapper:{
        flexDirection:'row',
        justifyContent:"space-between",
        borderColor:"rgba(183, 183, 183, 1)",
        borderBottomWidth:1,
        padding:6
    },
    rowWrapper2:{
        padding:6,
        justifyContent:"center",
    },
    dayWrapper:{
        backgroundColor:'rgba(18, 137, 123, 1)',
        width:"40%",
        alignItems:"center",
        justifyContent:'center',
        marginTop:6,
        padding:3,
        borderRadius:3,
    },
    rowWrapperGhiChu:{
        padding:6,

    },
    txtGhiChu:{
        color:"rgba(114, 112, 112, 1)",
        fontStyle:'italic'
    },
    pngWrapper:{
        position:'absolute',
        backgroundColor:'rgba(86, 85, 85, 1)',
        top:90,
        left:25,
        zIndex:1,
        padding:3,
        borderRadius:10
    },
    rowWrapperGopY:{
        flexDirection:'column',
        paddingBottom:6,
    },
    txtGopY:{
        borderColor:"rgba(183, 183, 183, 1)",
        borderBottomWidth:1,
        padding:6,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'black',
      },
    rowWrapperSpeed:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:6,
        width:"70%",
        paddingLeft:36
    },
    pngWrapper1:{
        position:'absolute',
        backgroundColor:'rgba(86, 85, 85, 1)',
        top:562,
        left:25,
        zIndex:1,
        padding:3,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    rowWrapper3:{
        paddingRight:23,
        flexDirection:'row',
        justifyContent:'flex-start'
    }
})