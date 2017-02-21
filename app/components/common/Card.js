import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = {
  container: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    position: 'relative',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8
  }
};

export { Card } ;
