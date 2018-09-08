import React, { Component } from 'react';
import './PlanetTableItem.css';

export class PlanetTableItem extends Component {
  render() {
    let { planet } = this.props;
    let films = [...this.props.films.data].filter(({ url }) =>
      planet.films.includes(url),
    );

    return (
      <tr className="PlanetTable__row">
        <td className="PlanetTable__td">{planet.name}</td>
        <td className="PlanetTable__td">{planet.population}</td>
        <td className="PlanetTable__td">{planet.diameter}</td>
        <td className="PlanetTable__td">{planet.rotation_period}</td>
        <td className="PlanetTable__td">{planet.orbital_period}</td>
        <td className="PlanetTable__td">{planet.terrain}</td>
        <td className="PlanetTable__td">
          {films.length
            ? films.map((film, k) => <p key={k}>{film.title}</p>)
            : 'None'}
        </td>
      </tr>
    );
  }
}
