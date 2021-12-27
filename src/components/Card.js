import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

function Card({
  imageUrl,
  overlayOpacity,
  overlayBackgroundColor,
  title,
  description,
}) {
  const width = useWindowDimensions().width - 40;
  const height = (width / 16) * 9;

  const defaultOverlayBackgroundColor = 'black';
  const defaultOverlayOpacity = 0.6;

  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: imageUrl,
      }}
      style={[
        styles.container,
        {
          height,
          width,
        },
      ]}>
      <View
        style={[
          styles.floating,
          {
            backgroundColor:
              overlayBackgroundColor || defaultOverlayBackgroundColor,
            opacity: overlayOpacity || defaultOverlayOpacity,
          },
        ]}
      />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 20,
  },
  floating: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 20,
  },
});

export default Card;
