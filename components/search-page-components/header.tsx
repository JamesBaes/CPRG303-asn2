import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: 'center'}}>
        <Image source={require("@/assets/images/profile-pic.jpg")} style={styles.profilePic}/>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={{ flex: 1/8 }}>
        <Feather name="camera" size={24} color="white" style={{}} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  container: {
    flexDirection: "row", 
    alignItems: 'center',
    marginBottom: 15
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


})