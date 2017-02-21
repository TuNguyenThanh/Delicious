import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputText = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.viewInput}>
      <View style={styles.titleViewInput}>
        <Text style={styles.titleTextInput}>{label}</Text>
      </View>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  viewInput: {
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  },

  titleViewInput: {
    flex: 1,
    justifyContent: 'center'
  },

  titleTextInput: {
    color: 'white'
  },

  inputStyle: {
    flex: 2,
    color: 'white'
  },
};

export { InputText };
