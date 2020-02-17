import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export interface CardItemResponse {
  shop_id: string;
  shop_name: string;
  item_id: string;
  item_name: string;
  item_price: number;
  item_discount: number;
  item_rating: number;
}

export interface CardItemProps extends CardItemResponse {}

export default function CardItem({
  shop_name,
  item_name,
  item_price,
  item_discount,
  item_rating,
}: CardItemProps) {
  const discount_price = item_price - item_price * (item_discount / 100);

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../assets/dominoRated.png')}
        />
        <Text style={styles.shopName}>{shop_name}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemName}>{item_name}</Text>
        <View style={styles.bottomTextView}>
          <View style={styles.bottomLeftView}>
            <Image
              source={require('../../assets/star.png')}
              style={styles.star}
            />
            <Text>{item_rating}</Text>
          </View>
          <View style={styles.bottomRightView}>
            <Text style={styles.itemPrice}>Rp. {item_price}</Text>
            <Text style={styles.discountPrice}>Rp. {discount_price}</Text>
          </View>
        </View>
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: 'column',
    borderRadius: 3,
    borderWidth: 1,
    // ...Platform.select({
    //   android: {
    //     elevation: 4,
    //   },
    //   ios: {
    //     shadowColor: '#00000029',
    //     shadowOffset: {
    //       height: 0,
    //       width: 3,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 6,
    //   },
    // }),
    marginRight: 10,
  },
  shopName: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 7,
    paddingLeft: 10,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  itemName: {
    fontSize: 10,
    fontWeight: '600',
  },
  textView: {
    padding: 5,
  },
  imageView: {},
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'pink',
  },
  bottomLeftView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRightView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  itemPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#888888',
    textAlign: 'right',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    includeFontPadding: false,
  },
  discountPrice: {
    textAlign: 'right',
    color: '#AA000C',
    includeFontPadding: false,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  star: {
    height: 14,
    width: 14,
  },
});
