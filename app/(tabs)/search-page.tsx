import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import BrowseCard from '@/components/search-page-components/browseCard'
import DiscoverCard from '@/components/search-page-components/discoverCard'
import Header from '@/components/search-page-components/header'
import MusicBar from '@/components/musicBar'
import SearchBar from '@/components/search-page-components/searchBar'

// Mock Data for BrowseCard
const browseCards = [
  {
    id: 1,
    genre: 'Music',
    image: 'https://wallpapersok.com/images/hd/minimalist-abstract-art-in-pastel-colors-x4jv8i1uwtbmcybw.jpg',
    color: '#C11C84'
  },
  {
    id: 2,
    genre: 'Podcasts',
    image: 'https://thevirtualinstructor.com/blog/wp-content/uploads/2013/08/understanding-abstract-art.jpg',
    color: '#097969'
  },
  {
    id: 3,
    genre: 'Audiobooks',
    image: 'https://images.pexels.com/photos/8725223/pexels-photo-8725223.jpeg',
    color: '#254ca2'
  },
  {
    id: 4,
    genre: 'Live Events',
    image: 'https://t4.ftcdn.net/jpg/08/25/21/97/360_F_825219783_NTnXArJFuF55ku715dHZKPYIXvitELho.jpg',
    color: '#800080'
  },
]

// Mock data for DiscoverCard
const discoverCards = [
  {
    id: 1,
    title: "Music for you",
    image: "https://images.squarespace-cdn.com/content/v1/5f7e2a6c122e8851be82f848/d436d69f-447e-47fd-84f7-20e855da1d12/20230812_060059196_iOS.jpg"
  },
  {
    id: 2,
    title: "#k-indie",
    image: "https://billboardphilippines.com/wp-content/uploads/2025/03/wave-to-earth-manila--1600x838.jpg"
  },
  {
    id: 3,
    title: "#downtown vibes",
    image: "https://i.ytimg.com/vi/h3gwRr_54cE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbFDHOnlkLBCZEzmfsFAceNU8KSw"
  }
]

const SearchPage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#000", padding: 20 }}>

        <Header />

        <SearchBar />

        {/* Start Browsing Section */}
        <View style={styles.browseSection}>
          <Text style={styles.browseSectionText}>Start Browsing</Text>
          <View style={styles.browseSectionContainer}>
          {
            browseCards.map((card) => (
                <BrowseCard  
                  key={card.id}
                  genre={card.genre} 
                  image={card.image} 
                  color={card.color} 
                />
            ))
          }
          </View>
        </View>

        {/* Discover Something New Section */}
        <View style={styles.discoverSection}>
          <Text style={styles.discoverSectionText}>Discover something new</Text>
          <View style={styles.discoverSectionContainer}>
            {
              discoverCards.map((card) => (
                <DiscoverCard
                  key={card.id}
                  title={card.title}
                  image={card.image}
                />
              ))
            }
          </View>
        </View>


        {/* Browse All Section */}
        <View style={styles.browseAllSection}>
            <Text style={styles.browseAllSectionText}>Browse all</Text>
            <View style={styles.browseSectionContainer}>
              {
                browseCards.map((card, index) => index < 2 && (
                    <BrowseCard  
                      key={card.id}
                      genre={card.genre} 
                      image={card.image} 
                      color={card.color} 
                    />
                ))
              }
          </View>
        </View>      

        <View style={styles.musicBar}>
          <MusicBar />
        </View>
      
    </SafeAreaView>
  )
}

export default SearchPage

const styles = StyleSheet.create({

  browseSection: {
    marginVertical: 15
  },

  browseSectionText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15
  },

  browseSectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15
  },

  discoverSection: {
    marginBottom: 15
  },

  discoverSectionText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15
  },

  discoverSectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15
  },
  
  browseAllSection: {
    marginBottom: 15
  },

  browseAllSectionText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15
  },

  musicBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
  }

})