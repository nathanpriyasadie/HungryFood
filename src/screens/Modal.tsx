import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {DiscountBox} from '../components';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.menuImage}
        source={require('../assets/burger.png')}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>WHOPPER</Text>
        <Text style={styles.caption}>
          Our Whopper® Sandwich is a ¼ lb* of savory flame-grilled beef topped
          with juicy tomatoes, fresh lettuce, creamy mayonaise, ketchup, crunchy
          pickles, and sliced white onions on a soft sesame seed bun
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Rating</Text>
          <View style={styles.starAndNumberContainer}>
            <Image source={require('../assets/star.png')} />
            <Text style={styles.ratingScore}>4.6</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.regularPrice}>Rp.42,600.00</Text>
          <Text style={styles.discountedPrice}>Rp.21,300.00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButtonContainer}>
        <Text style={styles.addbuttonText}>ADD TO CART</Text>
      </TouchableOpacity>
      <DiscountBox
        style={styles.discountBox}
        boxSize={115}
        discountPercentage={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(178, 34, 34, 50)',
    height: '100%',
  },
  menuImage: {
    width: '100%',
  },
  title: {
    width: '100%',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  caption: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'justify',
  },
  detailContainer: {
    paddingHorizontal: '3.5%',
  },
  bottomContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    paddingHorizontal: '3.5%',
  },
  ratingContainer: {
    flexDirection: 'column',
  },
  ratingTitle: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  starAndNumberContainer: {
    flexDirection: 'row',
    color: '#FFFFFF',
  },
  ratingScore: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  priceContainer: {
    marginLeft: 'auto',
  },
  regularPrice: {
    textAlign: 'right',
    color: '#FFFFFF',
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    textAlign: 'right',
    color: '#EDB430',
    fontSize: 26,
  },
  addButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 30,
    backgroundColor: '#E53735',
  },
  addbuttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  discountBox: {
    position: 'absolute',
    top: 0,
  },
});
