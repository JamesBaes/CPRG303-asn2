import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'

// Properties for discover card
type discoverCardProps = {
  title: string;
  image: string;
}

const DiscoverCard = ({ title, image }: discoverCardProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.image} 
        source={{ uri: image }} 
        imageStyle={styles.imageOpacity}
      >
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </View>
  )
}

export default DiscoverCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 110,
    height: 224,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 12,
    backgroundImage: "rgba(0,0,0,0.2)"
  },
  imageOpacity: {
    opacity: 0.5,
    borderRadius: 12,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold"
  }
})