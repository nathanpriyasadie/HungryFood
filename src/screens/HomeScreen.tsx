import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import InformationCard from '../components/InformationCard';
import CountdownCard from '../components/CountdownCard';
import ContainerTitle from '../components/ContainerTitle';
import PromoCard from '../components/PromoCard';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
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
        <View style={styles.container}>
          <ContainerTitle title="Promoted" />
          <PromoCard
            title="Burger King"
            subtitle="50% off all dishes! only on this hour"
            image={require('../assets/burgerkingPromo.png')}
          />
        </View>
      </View>
    </View>
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
  container: {
    marginTop: 10,
  },
});
