import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

// Properties for the card
type BrowseCardProps = {
  genre: string;
  image: string;
  color: string;
};

const BrowseCard = ({genre, image, color}: BrowseCardProps) => {
  return (
    <View style={{width: 167, height: 62, backgroundColor: color, borderRadius: 4, flexDirection: 'row', overflow: "hidden"}}>
        <Text style={styles.genre}>{genre}</Text>
          <Image style={styles.image} source={{uri: image}} />
    </View>
  )
}

export default BrowseCard

const styles = StyleSheet.create({
  genre: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    padding: 5
  },

  image: {
    height: 65, 
    width: 65,
    transform: [{ rotate: '30deg' }],
  },

})