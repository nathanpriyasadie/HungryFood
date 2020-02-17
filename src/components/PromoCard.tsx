import React from 'react';
import {View, StyleSheet, Platform, Text, Image} from 'react-native';

export interface PromoCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function PromoCard({
  title = '00',
  subtitle = '00',
  image = '00',
}: PromoCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 3,
    // borderWidth: 1,

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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 12,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  textView: {
    paddingHorizontal: 7,
    paddingBottom: 6,
  },
});
