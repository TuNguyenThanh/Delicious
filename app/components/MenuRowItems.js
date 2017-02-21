import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MenuRowItems = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.titleRow} >{name}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    marginTop: 20
  },

  titleRow: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent'
  },

};

export default MenuRowItems;
