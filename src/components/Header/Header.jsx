import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h2 className="Header__title">{this.props.title}</h2>
        <p className="Header__description">{this.props.description}</p>
      </header>
    );
  }
}
