import BigPlaylistCard from '@/components/home-page-components/bigPlaylistCard'
import Header from '@/components/home-page-components/header'
import SmallPlaylistCard from '@/components/home-page-components/smallPlaylistCard'
import MusicBar from '@/components/home-page-components/musicBar'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

// Mock Data for Playlist Cards
const playlistCards = [
  {
    id: 1,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 2,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 3,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 4,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 5,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 6,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 7,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  {
    id: 8,
    title: "This Is How Tomorrow Moves",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    artist: "beabadoobee"
  },
  
]

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#000", padding: 15}}>

      <Header />


      <View style={styles.smallPlaylistCardsSection}>
        {/* Small Playlist Cards Section */}
        <FlatList 
          data={playlistCards}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.smallCardColumnWrapper}
          contentContainerStyle={styles.smallPlaylistCardsContainer}
          renderItem={({ item }) => (
            <SmallPlaylistCard 
              title={item.title} 
              image={item.image} 
            />
          )}
        />
      </View>

      {/* Big Playist Cards Section (Jump Back In) */}
      <View style={styles.bigPlaylistCardsSection}>
        <Text style={{ fontSize: 22, color: "white", fontWeight: "bold", marginBottom: 20,}}>
          Jump back in
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={playlistCards}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.bigPlaylistCardsContainer}
          numColumns={1}
          renderItem={({ item }) => (
            <BigPlaylistCard 
              title={item.title} 
              image={item.image}
              artist={item.artist}
            />
          )}
        />
      </View>

        {/* Recents Section */}
      <View style={{ flexDirection: "row", alignItems: 'center', gap: 222, marginTop: 20}}>
        <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
          Recents
        </Text>
        <Text style={{ fontSize: 14, color: 'gray' , fontWeight: "500"}}>
          Show all
        </Text>
      </View>

      <MusicBar />
      
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({

  smallPlaylistCardsSection: {
    marginBottom: 15
  },
    
  smallPlaylistCardsContainer: {
    gap: 10,
  },

  smallCardColumnWrapper: {
    justifyContent: "space-between",
  },

  bigPlaylistCardsSection: {
    marginBottom: 15
  },

  bigPlaylistCardsContainer: {
    flexDirection: "row",
    gap: 8
  },

})