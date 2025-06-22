import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type bigPlaylistCardProps = {
    title: string;
    image: string;
    artist: string;
}

const BigPlaylistCard = ({ title, image, artist }: bigPlaylistCardProps) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
        <Text numberOfLines={1} style={styles.artistText}>{artist}</Text>
    </View>
  )
}

export default BigPlaylistCard

const styles = StyleSheet.create({
    container: {
        width: 156,
        gap: 4
    },

    image: {
        width: 148,
        height: 148,
        borderRadius: 6
    },

    titleText: {
        fontSize: 15,
        fontWeight: '500',
        color: "white"
    },

    artistText: {
        fontSize: 13,
        fontWeight: "500",
        color: 'gray'
    }
})