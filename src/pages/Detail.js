import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Stars from 'react-native-stars'

import SwiperComponent from '../components/Swiper'

export default function Detail() {
 return (
   <View style={styles.container}>

     <View style={styles.swiperContent}>
      <SwiperComponent />
     </View>

     <View style={styles.headerContent}>

      <View style={{ width: '65%' }}>
        <Text style={styles.house}>Casa de Praia</Text>
      </View>

      <View style={{ width: '35%' }}>
        <Text style={styles.rating}>Avaliações</Text>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Stars 
            default = {4}
            half = {true}
            count = {5}
            starSize = {20}
            fullStar = { <Ionicons name="md-star" size={24} style={styles.myStartStyle}/>}
            emptyStar = { <Ionicons name="md-star-outline" size={24} style={styles.myStartStyle}/> }
            helfStar = { <Ionicons name="md-star-half" size={24} style={styles.myStartStyle}/> }
          />
        </View>
      </View>

     </View>

     <Text style={styles.price}>
       R$ 1.200,20
     </Text>
     <Text style={styles.description}>
       Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas.
     </Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, marginTop: 35 }}>
      <View style={styles.slide}>
        <Image 
          source={require('../assets/house5.jpg')}
          style={{ width: 90, height: 90, borderRadius: 8 }}
        />
      </View>

      <View style={styles.slide}>
        <Image 
          source={require('../assets/house4.jpg')}
          style={{ width: 90, height: 90, borderRadius: 8 }}
        />
      </View>

      <View style={styles.slide}>
        <Image 
          source={require('../assets/house3.jpg')}
          style={{ width: 90, height: 90, borderRadius: 8 }}
        />
      </View>
      <View style={styles.slide}>
        <Image 
          source={require('../assets/house5.jpg')}
          style={{ width: 90, height: 90, borderRadius: 8 }}
        />
      </View>

      <View style={styles.slide}>
        <Image 
          source={require('../assets/house4.jpg')}
          style={{ width: 90, height: 90, borderRadius: 8 }}
        />
      </View>

      <View style={styles.slide}>
        <Image 
          source={require('../assets/house3.jpg')}
          style={{ width: 90, height: 90, borderRadius: 8 }}
        />
      </View>
     </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  swiperContent: {
    flexDirection: 'row',
    height: '45%',
    width: '100%'
  },

  headerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },

  house: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4fa4a4'
  },

  rating: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 9,
    color: '#4fa4a4'
  },

  myStartStyle: {
    color: '#e7a74e',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
  },

  price: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#000'
  },

  description: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#b3aeae',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },

  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  }
});