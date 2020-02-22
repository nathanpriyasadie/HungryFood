import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export interface CartItemCardProps {
  image?: string;
  item_id?: number;
  item_name?: string;
  item_price?: string;
  item_discount?: number;
  setTotalItem?: Function;
  totalItem?: array;
}

export function CartItemCard({
  image,
  item_id,
  item_name,
  item_price,
  item_discount,
  setTotalItem,
  totalItem,
}: CartItemCardProps) {
  const [quantity, setQuantity] = useState(0);
  const discount_price = item_price - item_price * (item_discount / 100);

  const changeQuantity = payload => {
    const newQuantity = quantity + payload > 0 ? quantity + payload : 0;
    setQuantity(newQuantity);
    const newTotalItem = [...totalItem];
    newTotalItem[item_id] = newQuantity * discount_price;
    setTotalItem(newTotalItem);
    console.log('quantity : ' + quantity);
    console.log('newTotalItem : ' + newTotalItem);
    console.log('totalItem : ' + totalItem);
  };

  const inputQuantity = newQuantity => {
    newQuantity = newQuantity == '' ? 0 : parseInt(newQuantity);
    console.log(newQuantity);
    if (newQuantity !== NaN) {
      setQuantity(newQuantity);
    } else {
      setQuantity(0);
    }
    const newTotalItem = [...totalItem];
    newTotalItem[item_id] = newQuantity * discount_price;
    setTotalItem(newTotalItem);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Whooper.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item_name}</Text>
        <Text style={styles.itemPrice}>Rp.{item_price}</Text>
        <Text>Rp.{discount_price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => changeQuantity(-1)}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          onChangeText={text => inputQuantity(text)}
          keyboardType="number-pad"
          value={quantity.toString()}
        />
        <TouchableOpacity onPress={() => changeQuantity(1)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 4,
    height: 58,
  },
  itemPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#888888',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    includeFontPadding: false,
  },
  itemName: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  quantityInput: {
    borderWidth: 1,
    padding: 0,
    height: 30,
    width: 30,
    textAlign: 'center',
    borderRadius: 5,
  },
  image: {
    marginRight: 5,
  },
  button: {
    width: 30,
    height: 30,
    textAlign: 'center',
    color: '#AA000C',
    fontWeight: 'bold',
  },
});
