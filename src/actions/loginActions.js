import { login } from '../services/starwars';

export function loginCharacter(username, password) {
  return function (dispatch) {
    login(username).then(response => {
        if(username===response.results[0].name && password===response.results[0].birth_year){
          dispatch({
            type: "LOGIN_SUCCESS"
          });
        }
        else{
          dispatch({
            type: "LOGIN_FAILURE"
          });
        }
      })
      .catch(error => {
        dispatch({
            type: "ERROR"
        });
      });
  };
}

