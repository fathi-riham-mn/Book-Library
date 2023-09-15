import React from 'react'
import {StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput,} from 'react-native'

const Categories = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Books')}>
                    <Text style={styles.btnText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Books')}>
                    <Text style={styles.btnText}>Programming</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Books')}>
                    <Text style={styles.btnText}>Cookbooks</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Books')}>
                    <Text style={styles.btnText}>Horror</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Books')}>
                    <Text style={styles.btnText}>Historical</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Books')}>
                    <Text style={styles.btnText}>Essays</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:"5%",
        backgroundColor: '#294603',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        alignItems:"center",
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
    },
    btn : {
        marginTop: 25,
        padding:10,
        backgroundColor:'#00ffb7',
        width:"80%",
        alignItems: "center",
        borderRadius:20,
    },
    btnText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        padding:1
    }
});


export default Categories