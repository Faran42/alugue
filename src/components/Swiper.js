import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperConponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >
      <Image
        source={require('../assets/house1.jpg')}
        style={{ width: '100%', height: '100%' }}
      />
      <Image
        source={require('../assets/house2.jpg')}
        style={{ width: '100%', height: '100%' }}
      />
      <Image
        source={require('../assets/house3.jpg')}
        style={{ width: '100%', height: '100%' }}
      />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF'
  }
});