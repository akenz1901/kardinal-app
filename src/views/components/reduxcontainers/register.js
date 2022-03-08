import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';
import Onboarding from '../actions/Registration';

class RegisterPage extends Component {
  // doSignup = data => this.props.signup(data, this.context.router);
  render() {
    return <Onboarding signup={(data)=>this.props.signup(data, this.context.router)} />;
  };
};

export default connect(
  null,
  { signup }
)(RegisterPage);
