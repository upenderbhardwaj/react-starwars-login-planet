import React, { Component } from 'react';
import './styles.css';

class SearchInput extends Component {
  
  componentDidMount() {
    this.searchInput.focus();
  }

  inputHandler = event => {
    this.props.onInput(event);
  };

  render() {
    return (
      <div>
        <input type="text"
          ref={input => this.searchInput = input}
          className="search-control"
          onInput={this.inputHandler}
          placeholder="Search Star Wars Planets"
        />
      </div>
    );
  }
}

export default SearchInput;
