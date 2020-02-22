import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {RadioButton} from './RadioButton';

export function RadioButtonList() {
  const [selected, setSelected] = useState(null);

  function changeSelected(id) {
    setSelected(id);
    console.log('id : ' + id);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <RadioButton
            title={item.title}
            id={index}
            changeSelected={changeSelected}
            propsToggle={index === selected ? true : false}
          />
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});

const data = [
  {title: 'I will pickup my food'},
  {title: 'i want my food delivered'},
];
