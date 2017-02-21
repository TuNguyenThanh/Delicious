import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonLogin, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonLogin: {
    marginBottom: 10,
    backgroundColor: '#FE4E50',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },

  buttonTextStyle: {
    color: 'white',
    fontSize: 20
  },
};

export { Button };
