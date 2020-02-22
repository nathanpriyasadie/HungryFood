import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Button} from './Button';
import {CartItemCard} from './CartItemCard';
import {RadioButtonList} from './RadioButtonList';

export function CartCard() {
  const [totalItem, setTotalItem] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    return () => {
      let newTotal = 0;
      for (let i = 0; i < totalItem.length; i++) {
        newTotal = newTotal + totalItem[i];
      }
      setTotal(newTotal);
      console.log('total di parent : ' + total);
    };
  }, [totalItem, total]);

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <View style={StyleSheet.flatten([styles.topContainer])}>
        <Text style={StyleSheet.flatten([styles.topText])}>
          Your Food Cart:
        </Text>
        <CartItemCard
          item_id={0}
          item_name="Whooper"
          item_price="2100000"
          item_discount={20}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />
        <View style={StyleSheet.flatten([styles.savedContainer])}>
          <Text style={StyleSheet.flatten([styles.savedText])}>You saved </Text>
          <Text style={StyleSheet.flatten([styles.savedNumberText])}>
            Rp. 28,800.00
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Choose how food will be ordered:</Text>
        <RadioButtonList />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>Rp. {total}</Text>
        </View>
        <Button title="CONFIRM ORDER AND PAY" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    bottom: 0,

    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#00000029',
        shadowOffset: {
          height: 0,
          width: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
      },
    }),
  },
  topContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  topText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: '#AA000C',
    paddingTop: 10,
    paddingBottom: 18,
    padding: 30,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 14,
    color: 'white',
  },
  savedText: {
    fontSize: 14,
  },
  savedNumberText: {
    fontSize: 14,
    color: '#AA000C',
  },
  savedContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
