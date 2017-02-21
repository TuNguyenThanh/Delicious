import React from 'react';
import { View, Text } from 'react-native';

const MenuSectionItems = ({ category, children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.titleSection}>
        {category}
      </Text>
      {children}
    </View>
  );
};

const styles = {
  container: {
    marginLeft: 20,
    marginTop: 50
  },

  titleSection: {
    opacity: 0.5,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent'
  },

};

export default MenuSectionItems;
