import BigPlaylistCard from '@/components/home-page-components/bigPlaylistCard'
import Header from '@/components/home-page-components/header'
import SmallPlaylistCard from '@/components/home-page-components/smallPlaylistCard'
import React from 'react'
import MusicBar from '@/components/musicBar'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

// Mock Data for Playlist Cards
const playlistCards = [
  {
    id: 1,
    title: "Apricot Princess",
    image: "https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d",
    artist: "Rex Orange County",
  },
  {
    id: 2,
    title: "Kisses and Kills",
    image: "https://i.scdn.co/image/ab67616d0000b273d1d8c6f08fd3cba8ca6fe863",
    artist: "THE ORAL CIGARETTES",
  },
  {
    id: 3,
    title: "0.1 flaws and all",
    image: "https://i.scdn.co/image/ab67616d0000b273c21555708975ad94b1faf422",
    artist: "wave to earth",
  },
  {
    id: 4,
    title: "Soy Pablo",
    image: "https://m.media-amazon.com/images/I/51NtTftxs9L._UF1000,1000_QL80_.jpg",
    artist: "Boy Pablo",
  },
  {
    id: 5,
    title: "Grow",
    image: "https://upload.wikimedia.org/wikipedia/en/2/24/Chon_Grow_artwork.jpg",
    artist: "artisthon",
  },
  {
    id: 6,
    title: "Being So Normal",
    image: "https://m.media-amazon.com/images/I/71+RCfHRykL._UF1000,1000_QL80_.jpg",
    artist: "Peach Pit",
  },
  {
    id: 7,
    title: "Give Me A Minute",
    image: "https://i.scdn.co/image/ab67616d0000b2736c1ff9424f275a8af7c72551",
    artist: "Lizzy McAlpine",
  },
  {
    id: 8,
    title: "In The End It Always Does",
    image: "https://media.pitchfork.com/photos/64932b30e7a8aa8db8026ea6/master/w_1280%2Cc_limit/The%2520Japanese%2520House-%2520In%2520the%2520End%2520It%2520Always%2520Does%2520.jpeg",
    artist: "The Japanese House"
  },  
]

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#000", padding: 20}}>

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
      <View style={{ flexDirection: "row", alignItems: 'center', gap: 217, marginTop: 20}}>
        <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
          Recents
        </Text>
        <Text style={{ fontSize: 14, color: 'gray' , fontWeight: "500"}}>
          Show all
        </Text>
      </View>
      <View style={styles.musicBar}>
        <MusicBar />
      </View>
      
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

  musicBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
  }
})