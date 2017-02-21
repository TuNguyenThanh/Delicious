import React from 'react';
import { View, Image, Text } from 'react-native';

const Icon = ({ image, iconStyle, textStyle, title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={iconStyle}
        source={image}
      />
      {
        title &&
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      }
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  textStyle: {
    marginLeft: 8,
    marginRight: 8,
    color: 'white'
  }
};

export { Icon };
