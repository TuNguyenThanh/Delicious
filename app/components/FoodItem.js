import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';

const FoodItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardSection>
          <Image
            style={styles.image}
            source={{ uri: 'http://s3.amazonaws.com/etntmedia/media/images/ext/336492655/fast-food.jpg' }}
          >
            <View style={styles.viewNew}>
              <Text style={styles.titleNew}>NEW</Text>
            </View>

            <Image
              style={styles.viewShadow}
              source={require('./images/shadowitemgriddown.png')}
            >
              <Text style={styles.titleText}>Grilled Steak with vinegar sauce</Text>
            </Image>
          </Image>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  image: {
    flex: 1,
    height: 260,
    width: null,
    borderRadius: 5,
    flexDirection: 'column',
    //alignItems: 'flex-end'
  },

  viewShadow: {
    flex: 1,
    height: 100,
    justifyContent: 'flex-end',
    padding: 8
  },

  titleText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: '500',
    fontSize: 18
  },

  viewNew: {
    width: 48,
    backgroundColor: 'white',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingTop: 4,
    paddingBottom: 4
  },

  titleNew: {
    fontSize: 14,
    color: 'red'
  },

};

export default FoodItem ;
