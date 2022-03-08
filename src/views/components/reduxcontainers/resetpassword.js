import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetpassword } from '../actions';
import PasswordReset from '../actions/ResetPassword';

class ResetPasswordPage extends Component {
  doResetPassword = data => this.props.resetpassword(data, this.context.router);

  render() {
    return (
      <div>
        <PasswordReset resetpassword={this.doResetPassword} />
      </div>
    )
  }
}

export default connect(
  null,
  { resetpassword }
)(ResetPasswordPage);