import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from '@/components/library-page-components/header'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PlaylistCard from '@/components/library-page-components/playlistCard';
import MusicBar from '@/components/musicBar';
// Mock Data for Playlist Cards

const playlistCards = [
  {
    id: 1,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 2,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 3,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 4,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 5,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 6,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 7,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 8,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 9,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 10,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 11,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 12,
    title: "This Is How Tomorrow Moves",
    category: "Playlist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: false
  },  
]

const LibraryPage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#000", padding: 20}}>
      
      <Header />

      {/* (Recents) Bar Section */}
        <View style={{ marginTop: 15 ,flexDirection: "row", gap: 10, alignItems: 'center'}}>
          <View style={{ flexDirection: "row", gap: 2}}>
            <FontAwesome5 name="arrow-down" size={12.5} color="white" />
            <FontAwesome5 name="arrow-up" size={12.5} color="white" />
          </View>
          <View style={{ flexDirection: "row", gap: 246}}>
            <Text style={styles.text}>Recents</Text>
            <MaterialIcons name="grid-view" size={22} color="white" />
          </View>
        </View>

        {/* Playlist Section + Music Bar At Bottom */}
        <View style={{ flex: 1 }}>
          <ScrollView
          contentContainerStyle={styles.playlistSection}
          >
            {
              playlistCards.map((card) => (
                <PlaylistCard 
                  key={card.id}
                  title={card.title}
                  category={card.category}
                  image={card.image}
                  owner={card.owner}
                  isPinned={card.isPinned}
                  isDownloaded={card.isDownloaded}
                />
              ))
            } 
          </ScrollView>
         </View>

        <View style={styles.musicBar}>
          <MusicBar />
        </View>
    </SafeAreaView>
  )
}

export default LibraryPage

const styles = StyleSheet.create({

  playlistSection: {
    marginTop: 18,
    gap: 15,
    marginBottom: 10
  },

  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "500"
  },

  musicBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
  }

})