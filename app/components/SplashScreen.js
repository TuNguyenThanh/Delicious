import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      //Actions.Login({ type: 'reset' });
      Actions.Login({ type: 'reset' });
    }, 1000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={styles.backgroundStyle}
          source={require('./images/Background.png')}
        >
          <View style={styles.viewLogoStyle}>
            <Text style={styles.logoStyle}>Delicious</Text>
          </View>
          <Text style={styles.textCopyrightStyle}>Copyright by Thanh Tu</Text>
        </Image>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    alignItems: 'center',
  },

  viewLogoStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  logoStyle: {
    fontSize: 80,
    backgroundColor: 'transparent',
    color: 'white',
  },

  textCopyrightStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 15,
    paddingBottom: 4
  },
};

export default SplashScreen;
