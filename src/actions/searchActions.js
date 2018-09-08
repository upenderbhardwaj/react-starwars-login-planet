import { search } from '../services/starwars';

const parsePlanetsId = (Planets) =>
  Planets.map(chars => {
    chars.id = chars.url.match(/\d+/g)[0];
    return chars;
  });

export const searchPlanets = (term) => {
  return (dispatch) => {
    if (!term) {
      return dispatch({ type: "SEARCH_SUCCESS", payload: [] })
    }

    dispatch({ type: "SEARCH_LOADING" });

    search(term)
      .then(res => dispatch({ type: "SEARCH_SUCCESS", payload: parsePlanetsId(res.results) }))
      .catch(err => dispatch({ type: "SEARCH_ERROR", payload: err }));
  }
}
