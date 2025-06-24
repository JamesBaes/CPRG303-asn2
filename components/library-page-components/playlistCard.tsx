import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

// Playlist Card Props
type playlistCardProps = {
    title: string;
    category: string;
    image: string;
    owner: string;
    isPinned: boolean;
    isDownloaded: boolean;
}


const PlaylistCard = ({ title, category, image, owner, isPinned, isDownloaded }: playlistCardProps) => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
            <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
            <View style={{ flexDirection: "row", gap: 4, marginLeft: 8, alignItems:"center" }}>
                {isDownloaded && <MaterialIcons name="download-for-offline" size={14} color="#1DB954" />}
                {isPinned && <SimpleLineIcons name="pin" size={14} color="#1DB954" />}
                <Text style={styles.subText}>{category} • {owner}</Text>
            </View>
        </View>
    </View>
  )
}

export default PlaylistCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 75,
        backgroundColor: "black",
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
    },
    
    image: {
        width: 75,
        height: 75
    },

    titleText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: "500",     
        color: "white"
    },

    subText: {
        color: "gray",
        fontWeight: "500",
        fontSize: 13
    }
})