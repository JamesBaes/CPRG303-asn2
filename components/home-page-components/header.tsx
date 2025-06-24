import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

// Mock Data for Filter Buttons
const filterButtons = ["All", "Music", "Podcasts", "Audiobooks"]

const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={require("@/assets/images/profile-pic.jpg")} style={styles.profilePic}/>
        {
          // renders the filter buttons and uses conditional rendering so the first button ("all") is green
          filterButtons.map((button, index) => index === 0 ? (
            
            <View key={index} style={[styles.filterButton, {backgroundColor: "#1db954"}]}>
              <Text style={styles.buttonText}>{button}</Text>
            </View>
          ) : (
            <View key={index} style={styles.filterButton}>
              <Text style={styles.buttonText}>{button}</Text>
            </View>
          )
        )
        }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  container: {
    flexDirection: "row", 
    alignItems: 'center',
    marginBottom: 20,
    gap: 9
  },

  profilePic: {
    width: 34,
    height: 34,
    borderRadius: 34,
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 12
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
    fontSize: 12.5
  }

})