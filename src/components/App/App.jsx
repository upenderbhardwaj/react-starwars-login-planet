import React, { Component } from 'react';
import { Header, SearchBar, PlanetTable } from '..';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Star Wars Planets"
          description="A list of Star Wars planets provided by the swapi.co api"
        />
        <SearchBar />
        <PlanetTable />
      </div>
    );
  }
}
