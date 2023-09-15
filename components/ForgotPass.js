import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,} from 'react-native'

const ForgotPass = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:"#000000",fontSize:25,fontWeight:"bold",marginBottom:20}} >Reset Your Password</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email / Phone Number</Text>
                <TextInput style={styles.textField} placeholder={'Enter Email / Phone Number'}/>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btnText}>Send Code </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#294603',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#00ffb7',
        borderRadius:10,
        width:250,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default ForgotPass