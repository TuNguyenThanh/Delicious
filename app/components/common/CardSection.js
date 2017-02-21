import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = {
  container: {
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
};

export { CardSection };
