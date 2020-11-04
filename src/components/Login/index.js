import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="ui middle aligned center aligned grid" style={{height: '100vh'}}>
      <div className="login column">
        <h2 className="ui teal image header">
          <img src="https://semantic-ui.com/examples/assets/images/logo.png" alt="ddasd" className="image" />
          <div className="content">
            Log-in to your account
          </div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="ui fluid large teal submit button">Login</div>
          </div>
          <div className="ui error message" />
        </form>
      </div>
    </div>
  )
}

export default Login;
