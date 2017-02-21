import React from 'react';
import { View } from 'react-native';

const CardDetail = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 5,
  }
};

export { CardDetail };
