import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  search = event => {
    event.preventDefault();
    let search = window.encodeURIComponent(this.state.searchTerm);
    let href = window.location.href;
    window.location.href = href.split("?")[0] + "?search=" + search;
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    let { searchTerm } = this.state;

    return (
      <div className="SearchBar">
        <section className="container">
          <form onSubmit={this.search}>
            <i className="SearchBar__icon fa fa-search" />
            <input
              type="text"
              className="SearchBar__term"
              placeholder="Search"
              value={searchTerm}
              onChange={this.handleChange}
              onSubmit={this.search}
            />
          </form>
        </section>
      </div>
    );
  }
}
