import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import InformationCard from '../components/InformationCard';
import CountdownCard from '../components/CountdownCard';
import PromoCard from '../components/PromoCard';
import {CardItemList} from '../containers/general';
import CategoryList from '../components/CategoryList';
import {CartCard} from '../components/CartCard';

export function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.topView}>
          <SearchBar placeholder="What do you want to eat right now?" />
          <InformationCard
            addressText="Jl. Kyai H. Syahdan no.9"
            balanceText="4,993,000.00"
            pointsText="203.000"
          />
        </View>
        <View style={styles.mainView}>
          <CountdownCard />
          <Text style={styles.containerTitle}>Promoted</Text>
          <PromoCard
            title="Burger King"
            subtitle="50% off all dishes! only on this hour"
            image={require('../assets/burgerkingPromo.png')}
          />
          <Text style={styles.containerTitle}>Best Rated</Text>
          <CardItemList />
          <Text style={styles.containerTitle}>Highest Discount</Text>
          <CardItemList />
          <Text style={styles.containerTitle}>Categories</Text>
          <CategoryList />
        </View>
      </ScrollView>

      <View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alertButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <CartCard />
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  topView: {
    backgroundColor: '#E53735',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: 150,
    justifyContent: 'space-around',
  },
  mainView: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  containerTitle: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  container: {
    marginTop: 10,
  },
  addButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E53735',
    borderRadius: 34,
    bottom: 5,
    right: 20,
    height: 64,
    width: 64,
  },
  alertButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E53735',
    borderRadius: 34,
    bottom: 70,
    right: 20,
    height: 43,
    width: 43,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    includeFontPadding: false,
  },
});
