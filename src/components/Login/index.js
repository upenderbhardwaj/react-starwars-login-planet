import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
  
  componentDidMount(){
    this.username.focus();
  }

  render() {
    return (
      <div className={'login-container'}>
        <input type="text"
          ref={input => this.username = input}
          className="username-control"
          onBlur={this.props.inputHandler}
          name='username'
          placeholder={this.props.usernamePlaceholder}
        />
        <input type="password"
          name='password'
          className="password-control"
          onBlur={this.props.inputHandler}
          placeholder={this.props.passwordPlaceholder}
        />
        <button
          className="button-control" 
          onClick={this.props.loginHandler}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
