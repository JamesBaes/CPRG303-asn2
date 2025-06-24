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
    title: "Liked Songs",
    category: "Playlist",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e913f0317b78a75653c17e22",
    owner: "486 Songs",
    isPinned: true,
    isDownloaded: false
  },
  {
    id: 2,
    title: "This Is How Tomorrow Moves",
    category: "Album",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Beabadoobee_-_This_Is_How_Tomorrow_Moves.png/250px-Beabadoobee_-_This_Is_How_Tomorrow_Moves.png",
    owner: "beabadoobee",
    isPinned: true,
    isDownloaded: true
  },
  {
    id: 3,
    title: "Apricot Princess",
    category: "Album",
    image: "https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d",
    owner: "Rex Orange County",
    isPinned: true,
    isDownloaded: true
  },
  {
    id: 4,
    title: "Kisses and Kills",
    category: "Album",
    image: "https://i.scdn.co/image/ab67616d0000b273d1d8c6f08fd3cba8ca6fe863",
    owner: "THE ORAL CIGARETTES",
    isPinned: true,
    isDownloaded: true,
  },
  {
    id: 5,
    title: "Chest Pain (I Love)",
    category: "Album",
    image: "https://upload.wikimedia.org/wikipedia/en/8/86/Malcolm_Todd_-_Chest_Pain_%28I_Love%29.jpg",
    owner: "Malcolm Todd",
    isPinned: false,
    isDownloaded: true
  },
  {
    id: 6,
    title: "Vibes",
    category: "Album",
    image: "https://i1.sndcdn.com/artworks-000196774821-swd6if-t500x500.jpg",
    owner: "Vacations",
    isPinned: false,
    isDownloaded: false
  },
  {
    id: 7,
    title: "0.1 flaws and all",
    category: "Album",
    image: "https://i.scdn.co/image/ab67616d0000b273c21555708975ad94b1faf422",
    owner: "wave to earth",
    isPinned: false,
    isDownloaded: true
  },
  {
    id: 8,
    title: "Soy Pablo",
    category: "Album",
    image: "https://m.media-amazon.com/images/I/51NtTftxs9L._UF1000,1000_QL80_.jpg",
    owner: "Boy Pablo",
    isPinned: false,
    isDownloaded: false
  },
  {
    id: 9,
    title: "Grow",
    category: "Album",
    image: "https://upload.wikimedia.org/wikipedia/en/2/24/Chon_Grow_artwork.jpg",
    owner: "Chon",
    isPinned: false,
    isDownloaded: false
  },
  {
    id: 10,
    title: "Being So Normal",
    category: "Album",
    image: "https://m.media-amazon.com/images/I/71+RCfHRykL._UF1000,1000_QL80_.jpg",
    owner: "Peach Pit",
    isPinned: false,
    isDownloaded: false
  },
  {
    id: 11,
    title: "Give Me A Minute",
    category: "Album",
    image: "https://i.scdn.co/image/ab67616d0000b2736c1ff9424f275a8af7c72551",
    owner: "Lizzy McAlpine",
    isPinned: false,
    isDownloaded: true
  },
  {
    id: 12,
    title: "In The End It Always Does",
    category: "Album",
    image: "https://media.pitchfork.com/photos/64932b30e7a8aa8db8026ea6/master/w_1280%2Cc_limit/The%2520Japanese%2520House-%2520In%2520the%2520End%2520It%2520Always%2520Does%2520.jpeg",
    owner: "The Japanese House",
    isPinned: false,
    isDownloaded: true
  },  
]

const LibraryPage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#000", padding: 20}}>
      
      <Header />

      {/* (Recents) Bar Section */}
        <View style={{ marginTop: 20 ,flexDirection: "row", gap: 10, alignItems: 'center'}}>
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
    marginTop: 22,
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