import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as axios from "axios";
import { PlanetTableItem, Pagination } from "..";
import * as actions from "../../actions";
import "./PlanetTable.css";

function mapStateToProps(state, prop) {
  return { planets: state.planets, films: state.films };
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(actions, dispatch) };
}

export const PlanetTable = connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        page: this.getPage(),
        search: this.getSearch()
      };
    }

    fetchPlanets() {
      let { page, search } = this.state;
      let url = "http://swapi.co/api/planets/";

      if (page > 1) {
        url += "?page=" + page;
      } else if (search) {
        url += "?search=" + search;
      }

      axios
        .get(url)
        .then(response => {
          let { data: { results } } = response;
          results.map(result => this.props.action.addPlanet(result));

          let filmsToFetch = results
            .map(result => result.films)
            .reduce((a, b) => a.concat(b));

          this.fetchFilms([...new Set(filmsToFetch)]);
        })
        .catch(error => console.log(error));
    }

    fetchFilms(films) {
      films.map(film => {
        return axios
          .get(film)
          .then(response => this.props.action.addFilm(response.data))
          .catch(error => console.log(error));
      });
    }

    setPage = page => {
      this.setState({ page });
    };

    displayedPlanets = () => {
      let { page } = this.state;
      let urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has("page")) {
        return [...this.props.planets.data].slice(page || 0, page + 10);
      }

      return [...this.props.planets.data];
    };

    getSearch = () => {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("search")) {
        return urlParams.get("search");
      }

      return "";
    };

    getPage = () => {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("page")) {
        return urlParams.get("page");
      }

      return 1;
    };

    componentDidMount() {
      this.setPage(this.getPage());
      this.fetchPlanets();
    }

    render() {
      return (
        <div className="container">
          {this.displayedPlanets().length > 0 &&
            <table className="PlanetTable">
              <thead className="PlanetTable__thead">
                <tr className="PlanetTable__row ">
                  <th className="PlanetTable__th">Name</th>
                  <th className="PlanetTable__th">Population</th>
                  <th className="PlanetTable__th">Diameter</th>
                  <th className="PlanetTable__th">Rotation Period</th>
                  <th className="PlanetTable__th">Orbital Period</th>
                  <th className="PlanetTable__th">Terrain</th>
                  <th className="PlanetTable__th">Films</th>
                </tr>
              </thead>
              <tbody className="PlanetTable__tbody">

                {this.displayedPlanets().map((planet, key) => (
                  <PlanetTableItem
                    key={key}
                    planet={planet}
                    films={this.props.films}
                  />
                ))}
              </tbody>
            </table>}
          {this.displayedPlanets().length > 1 &&
            <Pagination
              action={this.setPage}
              page={this.state.page}
              max={this.props.planets.count / 10}
            />}
          {!this.displayedPlanets().length &&
            <div>
              <h2>No Planets To Display</h2>
              <a href="/">Back To Main List</a>
            </div>}
        </div>
      );
    }
  }
);
