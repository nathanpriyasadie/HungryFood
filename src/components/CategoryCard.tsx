import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

export interface CategoryCardResponse {
  category_id: string;
  category_name: string;
  image?: ImageSourcePropType;
}

export interface CategoryCardProps extends CategoryCardResponse {
  containerStyle?: ViewStyle;
  size?: number;
}

export default function CategoryCard({
  category_name = 'indonesian',
  image = require('../assets/indonesiaCategory.png'),
  containerStyle,
  size = 90,
}: CategoryCardProps) {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        containerStyle,
        {width: size, height: size},
      ])}>
      <Image style={{width: size, height: size}} source={image} />
      <Text style={styles.categoryName}>{category_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  categoryName: {
    position: 'absolute',
    color: 'black',
    bottom: 'auto',
    left: 'auto',
    fontSize: 14,
  },
});
