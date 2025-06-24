import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

// Properties for SmallPlaylistCard

type smallPlaylistCardProps = {
    title: string;
    image: string;
}

const SmallPlaylistCard = ({ title, image }: smallPlaylistCardProps) => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image}></Image>
        <Text numberOfLines={2} style={styles.text}>{title}</Text>
    </View>
  )
}

export default SmallPlaylistCard

const styles = StyleSheet.create({

    container: {
        width: 170,
        height: 60,
        backgroundColor: "#29292a",
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
    },
    
    image: {
        width: 60,
        height: 60,
        borderRadius: 4
    },

    text: {
        marginLeft: 8,
        fontSize: 13,
        fontWeight: "500",     
        color: "white",
        flexShrink: 1
    }
})