import React from 'react'
import {StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput,} from 'react-native'

const Books = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.h2}>The  Spirint</Text>
                <View style={{alignItems:"center",padding:30}}>
                    <Image resizeMode="stretch" style={{width:150,height:200}} source={require("../src/image-asset.jpeg")}/>
                    <Text style={styles.h1}>Author</Text>
                    <Text style={styles.h3}>Ryan Turner</Text>
                    <Text style={styles.h1}>Description</Text>
                    <Text style={styles.h3}>The Ultimate Beginner's Guide to Learn Python Machine Learning Step by Step using Scikit-Learn and Tensorflow, you will discover information and advice on: • What machine learning is• The history of machine learning• And more…</Text>
                    <Text style={styles.h1}>Rating</Text>
                    <Text style={styles.rating}>★★★★★</Text>
                    <Text style={styles.h1}>Price</Text>
                    <Text style={styles.h2}>$15</Text>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:"5%",
        backgroundColor: '#294603',
        justifyContent:'center',
        alignItems: 'center',
    },
    h2: {
        color:"white",
        fontSize: 30,
        fontWeight: "bold",
        padding:1,
        textAlign: 'center',
    },
    h1: {
        color:"#00ffb7",
        fontSize: 25,
        fontWeight: "bold",
        paddingTop:20,
        textAlign: 'center',
    },
    h3: {
        color:"white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    },
    rating: {
        color:"yellow",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    }
});


export default Books
