import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

const ImageSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    require('../../assets/video/1Banner.gif'),
    require('../../assets/video/Banner2.gif'),
    require('../../assets/video/banner3.gif'),
    require('../../assets/video/banner4.gif'),
    require('../../assets/video/banner5.gif'),
  ];

  const onImagePress = index => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          setSelectedIndex(Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width));
        }}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => onImagePress(index)}>
            <Image style={styles.image} source={image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <Text key={index} style={[styles.indicator, selectedIndex === index ? styles.selected : null]}>
            &bull;
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 140,
    width: 360,
    marginRight: 5,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 16,
  },
  indicator: {
    fontSize: 36,
    marginHorizontal: 8,
    backgroundColor: '#8EA7E9',
    width: 30,
    height: 8,
    borderRadius: 10
  },
  selected: {
    backgroundColor: 'black',
  },
});

export default ImageSlider;
