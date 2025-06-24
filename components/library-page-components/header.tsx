import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

// Mock Data for Filter Buttons
const filterButtons = [
  "Playlists", "Podcasts", "Albums", "Artists", "Downloaded"
]

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeaderSection}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: 'center'}}>
          <Image source={require("@/assets/images/profile-pic.jpg")} style={styles.profilePic}/>
          <Text style={styles.headerText}>Your Library</Text>
        </View>
        <View style={{ flex: 1/3.5, flexDirection: "row", gap: 24 }}>
          <Feather name="search" size={24} color='white' />
          <AntDesign name="plus" size={24} color="white" />
        </View>
      </View>
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.filterSection}
          showsHorizontalScrollIndicator={false}
        >
          {
            filterButtons.map((button, index) => (
              <View key={index} style={styles.filterButton}>
                <Text style={styles.buttonText}>{button}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  container: {
    gap: 20
  },

  topHeaderSection: {
    flexDirection: 'row'
  },

  profilePic: {
    width: 34,
    height: 34,
    borderRadius: 34,
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 12
  },

  filterSection: {
    gap: 9,
  },

  filterButton: {
    borderRadius: 20, 
    justifyContent:"center", 
    paddingVertical: 4, 
    paddingHorizontal: 14, 
    height: 30, 
    backgroundColor: "#29292a"
  },

  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 12.25
  }

})