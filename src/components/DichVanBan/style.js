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
        fontWeight:300,
        fontSize:18,
        color:"rgba(255, 255, 255, 1)",
        opacity:0.8,
        marginLeft:4
    },
    headerTxt:{
        fontSize: 20,
        color:"#FFFFFF",
        marginLeft:38
    },
    inputWrapper:{
        backgroundColor:"background: rgba(250, 250, 250, 1)",
        width:"100%",
        height:150,
        marginTop:10,
        borderRadius:10,
        position:"relative"
    },
    inputTxt:{
        height:150,
        fontSize:16,
        fontWeight:400,
        opacity:0.6,
        padding:10,
        paddingBottom:110,
    },
    inputIcon:{
        width:20,
        height:25,
        position:"absolute",
        right:10,
        top:9,
        padding:10,
    },
    optionWrapper:{
        width:"100%",
        height:60,
        flexDirection:'row',
        justifyContent:"flex-end",
        alignItems:"center",
        marginRight:20,
        marginTop:20
    },
    optionImg:{
        padding:10,
        borderColor:"rgba(1, 86, 167, 1)",
        borderWidth:1,
        borderRadius:10,
        marginLeft:10,
        marginRight:10
    },
    btnChoiceWrapper:{
        width:"100%",
        height:52,
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20

    },
    btnWrapper:{
        backgroundColor:"rgba(1, 86, 167, 1)",
        width:"46%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    btnTxt:{
        color:"rgba(255, 255, 255, 1)",
        // fontFamily:"Inter",
        fontSize:20,
        fontWeight:500
    },
    optionImgTrash:{
        marginLeft:319,
        marginTop:30,
        marginBottom:20,
        // marginRight:30
    },
    footertWrapper:{
        minWidth:256,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"rgba(255, 255, 255, 1)",
        borderRadius:10,
        height:72,
        alignItems:"center",
        marginTop:10,
        padding:10,
    },
    resultWrapper:{
        width:"70%",
        marginLeft:10,
        
    },
    resultTxt:{
        // fontFamily:"Inter",
        fontWeight:400,
        fontSize:18,
        minWidth:256
    },
    iconWrapper:{
        width:"30%",
        paddingRight:20,
        flexDirection:"row",
        justifyContent:"space-around",
    }
})