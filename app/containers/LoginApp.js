import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changedEmail, changedPassword, login } from '../actions';
import LoginForm from '../components/LoginForm';

class LoginApp extends Component {
  render() {
    return (
      <LoginForm {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.Login.email,
    password: state.Login.password,
    user: state.Login.user,
    error: state.Login.state,
    loading: state.Login.state,
  };
};

export default connect(mapStateToProps, {
  changedEmail, changedPassword, login
})(LoginApp);
