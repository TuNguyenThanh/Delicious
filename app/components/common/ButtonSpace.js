import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonSpace = ({ buttonStyle, textStyle, children, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    padding: 10
  }
};

export { ButtonSpace };
