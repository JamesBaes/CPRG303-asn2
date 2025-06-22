import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const MusicBar = () => {
  return (
    <LinearGradient 
        colors={["#8c6c4c", "#6F4E37", "#8c6c4c"]} 
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0 }}
    >
        
        <View style={{flexDirection: "row", gap: 8}}>
            <Image style={styles.image} source={{uri: "https://upload.wikimedia.org/wikipedia/en/d/dc/Clairo_-_Charm.png"}} />
            <View>
                <Text style={{fontSize: 13, fontWeight: "400", color: 'white'}}>Terrapin</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#a9a9a9'}}>Clairo</Text>
            </View>
        </View>

        <View style={{flexDirection: "row", gap: 24, marginLeft: 196}}>
            <MaterialCommunityIcons name="monitor-speaker" size={22} color="white" />
            <FontAwesome5 name="play" size={18} color="white" />  
        </View>

    </LinearGradient>
  )
}

export default MusicBar

const styles = StyleSheet.create({

    container: {
        width: "105%",
        height: 55,
        borderRadius: 8,
        marginLeft: -9,
        marginTop: 57,
        flexDirection: "row",
        alignItems: "center",
    },

    image: {
        height: 40,
        width: 40,
        borderRadius: 4,
        marginLeft: 7.5
    },

})