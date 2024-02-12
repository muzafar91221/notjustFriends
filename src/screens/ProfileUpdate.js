import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'


const dummy_img = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const ProfileUpdate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerconatainer}>
                <Image source={{ uri: dummy_img }} style={styles.img} />

                <TouchableOpacity style={styles.chngbtn}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'400'}}>Change photo</Text>
                </TouchableOpacity>
            </View>
            <TextInput placeholder='enter' style={styles.input}></TextInput>
        </View>
    )
}

export default ProfileUpdate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30

    },
    img: {
        width: "50%",
        aspectRatio: 1,

    },
    headerconatainer:{
        alignItems:'center'
    },
    chngbtn:{
        backgroundColor:'royalblue',
        padding:10,
        borderRadius:10,
    },
    input:{
        marginTop:10,
    }
})