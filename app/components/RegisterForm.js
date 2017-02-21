import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { InputText, Button } from './common';

export default class RegisterForm extends Component {
  signIn() {
    Actions.pop();
  }

  render() {
    return (
      <Image
        style={styles.backgroundStyle}
        source={require('./images/Background1.png')}
      >
        <View style={styles.formStyle}>
          <Text style={styles.logoStyle}>Delicious</Text>
          <InputText
            label={'First Name'}
          />
          <InputText
            label={'Last Name'}
          />
          <InputText
            label={'Email'}
          />
          <InputText
            label={'Password'}
            secureTextEntry
          />
          <Button>Create an Account</Button>
          <View style={styles.viewLoginBottom}>
            <TouchableOpacity onPress={this.signIn.bind(this)}>
              <Text style={styles.createAccountStyle}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.needHelpStyle}>Need help?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: null,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formStyle: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },

  logoStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20
  },

  viewLoginBottom: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  createAccountStyle: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    color: 'white',
    opacity: 0.5
  },

  needHelpStyle: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    color: 'white',
    opacity: 0.5
  },

});
