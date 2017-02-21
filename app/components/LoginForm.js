import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { InputText, Button, Spinner } from './common';

class LoginForm extends Component {
  onChangedEmail(email) {
    this.props.changedEmail(email);
  }

  onChangedPassword(password) {
    this.props.changedPassword(password);
  }

  onPressSignIn() {
    const { email, password } = this.props;
    this.props.login(email, password);
  }

  createAccount() {
    Actions.registerForm();
  }
  
  renderButtonLogin() {
    if (!this.props.loading) {
      return (
        <Button onPress={this.onPressSignIn.bind(this)}>Sign In</Button>
      );
    }
    return <Spinner color={'white'} />;
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
            label={'Email'}
            value={this.props.email}
            onChangeText={this.onChangedEmail.bind(this)}
          />
          <InputText
            label={'Password'}
            secureTextEntry
            value={this.props.password}
            onChangeText={this.onChangedPassword.bind(this)}
          />
          {this.renderButtonLogin()}
          <View style={styles.viewLoginBottom}>
            <TouchableOpacity onPress={this.createAccount.bind(this)}>
              <Text style={styles.createAccountStyle}>Create an account</Text>
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

export default LoginForm;
