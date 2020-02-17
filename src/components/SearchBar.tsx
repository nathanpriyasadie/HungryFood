import React from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  Image,
  Platform,
} from 'react-native';

export interface SearchBarProps extends TextInputProps {
  containerStyle?: ViewStyle;
}

export default function SearchBar({
  containerStyle,
  style,
  ...props
}: SearchBarProps) {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Image
        source={require('../assets/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        {...props}
        style={StyleSheet.flatten([styles.textInputContainer, style])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderColor: '#AB000D',
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 14,
    color: '#00000061',
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,

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
  searchIcon: {
    height: 17.5,
    width: 17.5,
  },
  textInputContainer: {
    flex: 1,
    marginLeft: 7.5,
    includeFontPadding: false,
    padding: 0,
  },
});
