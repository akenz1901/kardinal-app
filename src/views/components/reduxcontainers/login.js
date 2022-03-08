import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../actions/Login';

class LoginPage extends Component {
  // doLogin = data => this.props.login(data, this.context.router);

  render() {
    return <Login login={(data) => this.props.login(data, this.context.router)} />;
  }
}

export default connect(
  null,
  { login }
)(LoginPage);