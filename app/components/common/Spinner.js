import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator
      color={color || 'gray'}
      size={size || 'large'}
    />
  </View>
);

const styles = {
  container: {
    marginBottom: 10,
    backgroundColor: '#FE4E50',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
};

export { Spinner };
