import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import FoodItem from './FoodItem';
import { CardDetail, ButtonSpace, Icon, Button } from './common';

class FoodDetail extends Component {
  state = {
    isHide: true,

  }

  handleScroll(event: Object) {
    if (event.nativeEvent.contentOffset.y > 40) {
      console.log(event.nativeEvent.contentOffset.y);
      this.setState({ isHide: false });
    } else {
      this.setState({ isHide: true });
    }
  }

  render() {
    return (
      <Image style={styles.backgroundStyle} source={require('./images/Background2.png')}>
        <ScrollView
          style={{ paddingTop: 8 }}
          onScroll={this.handleScroll.bind(this)}
          scrollEventThrottle={16}
        >
          <FoodItem />
          <CardDetail>
            <View style={styles.detailsHeadTop}>
              <View style={styles.detailsHeadLeft}>
                <Icon image={require('./images/Clock.png')} title={'14 mins'} />
                <Icon image={require('./images/Fork.png')} title={'1-2'} />
              </View>
              <View>
                <Icon image={require('./images/Favorite.png')} />
              </View>
            </View>
            <View style={styles.detailsHeadBottom}>
              <ButtonSpace buttonStyle={styles.buttonLeft}>Instructions</ButtonSpace>
              <ButtonSpace
                buttonStyle={styles.buttonRight}
                textStyle={styles.buttonRightText}
              >Ingredients</ButtonSpace>
            </View>
          </CardDetail>
          <CardDetail>
            <Text style={{ color: 'white', marginLeft: 8, marginRight: 8, marginTop: 15, marginBottom: 15 }}>
              1. Blend the ingredients for pesto in a processor and keep aside.{"\n"}{"\n"}
              2. Blend the ingredients for pesto in a processor and keep aside.{"\n"}{"\n"}
              3. Blend the ingredients for pesto in a processor and keep aside.{"\n"}{"\n"}
              4. Sprinkle with rosemary, salt, pepper or any other additional herbs and spices as desired.{"\n"}{"\n"}
              5. Bake until vegetables are fork-tender and browned. Keep an eye on any vegetables as it’s.
            </Text>
          </CardDetail>

        </ScrollView>
        <Button
          style={[styles.buttonCart, { height: this.state.isHide ? 0 : 50 }]}
          onPress={() => console.log('aa')}
        >
          Add to shopping list
        </Button>
      </Image>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    marginTop: 64,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  detailsHeadTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 20
  },

  detailsHeadLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  detailsHeadBottom: {
    flexDirection: 'row',
    margin: 10,
  },

  buttonLeft: {
    marginRight: 5,
    backgroundColor: '#FE4E50'
  },

  buttonRight: {
    marginLeft: 5,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },

  buttonRightText: {
    color: 'white',
    opacity: 0.5
  },

  buttonCart: {
    position: 'absolute',
    bottom: 10,
    left: 25,
    right: 25
  }

};

export default FoodDetail;
