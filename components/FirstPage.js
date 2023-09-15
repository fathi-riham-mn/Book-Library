import React from 'react'
import {StyleSheet, Text, View,TouchableOpacity, Image,} from 'react-native'

const FirstPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width: '268px', height: "269px", left:'47px', top:'53px', position:"absolute", borderRadius:'30px'}} source={require('../src/download.jfif')}/>
            <Text style={{color:"Black", fontSize:"20px", fontWeight:"bold",}}>Welcome to </Text>
            <Text style={{color:"Black", fontSize:"24px", fontWeight:"bold",}}>Book Library</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:15,
        backgroundColor: '#00ffb7',
        justifyContent:'center',
        alignItems: 'center',
    },

    btn : {
        marginTop: 40,
        padding:0,
        backgroundColor:'#294603',
        width:"41%",
        alignItems: "center",
        borderRadius:30,
    },
    btnText: {
        color: "Black",
        fontSize: 24,
        fontWeight: "bold",
        padding:4,
    }
});


export default FirstPage