import React from 'react';
import './styles.css';

export default ({ planet, clearPlanetDetails }) =>
<section className="planets-details">
  <h2 className="planets-details__header">{planet.name}</h2>
  <div className="planets-details__sections">
    <div className="planets-details__detail">Planet Name: {planet.name}</div>
    <div className="planets-details__detail">rotation_period: {planet.rotation_period}</div>
    <div className="planets-details__detail">orbital_period: {planet.orbital_period}</div>
    <div className="planets-details__detail">diameter: {planet.diameter}</div>
    <div className="planets-details__detail">population: {planet.population}</div>
  </div>
  <div className="planets-details__sections">
    <div className="planets-details__detail">climate: {planet.climate}</div>
    <div className="planets-details__detail">gravity: {planet.gravity}</div>
    <div className="planets-details__detail">terrain: {planet.terrain}</div>
    <div className="planets-details__detail">surface_water: {planet.surface_water}</div>
  </div>
</section>
