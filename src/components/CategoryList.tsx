import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CategoryCard from './CategoryCard';

export interface CategoryListResponse {
  category_id: string;
  category_name: string;
  image?: Image;
}

export interface CategoryListProps extends CategoryListResponse {}

export default function CategoryList() {
  const [width, setWidth] = useState<number>();
  const size = width !== undefined ? width * 0.3 : undefined;
  const sizeMargin = width !== undefined ? width / 20 : undefined;

  return (
    <View
      onLayout={event => setWidth(event.nativeEvent.layout.width)}
      style={styles.container}>
      {width !== undefined && (
        <>
          <View style={styles.topView}>
            <CategoryCard
              size={size}
              category_id="1"
              category_name="Indonesian"
            />
            <CategoryCard
              size={size}
              containerStyle={{
                marginHorizontal: sizeMargin,
              }}
              category_id="2"
              category_name="Western"
            />
            <CategoryCard size={size} category_id="3" category_name="Chinese" />
          </View>
          <View
            style={StyleSheet.flatten([
              styles.bottomView,
              {marginTop: sizeMargin},
            ])}>
            <CategoryCard
              size={size}
              category_id="4"
              category_name="Japanese"
            />
            <CategoryCard
              size={size}
              containerStyle={{
                marginHorizontal: sizeMargin,
              }}
              category_id="5"
              category_name="Beverage"
            />
            <CategoryCard
              size={size}
              category_id="6"
              category_name="All Category"
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  categoryName: {
    position: 'absolute',
    color: 'white',
    bottom: 'auto',
    left: 'auto',
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
  },
  bottomView: {
    flexDirection: 'row',
    width: '100%',
  },
  flatlist: {
    borderWidth: 1,
    flexDirection: 'row',
  },
});
