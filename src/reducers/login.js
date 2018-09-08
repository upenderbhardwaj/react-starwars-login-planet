export const login = (state = null, action) => {
  switch (action.type) {

    case 'LOGIN_SUCCESS': {
      console.log(Object.assign({}, state,
        {loginSuccess:true}));
      return Object.assign({}, state,
        {loginSuccess:true});
    }

    case 'LOGIN_FAILURE': {
      return Object.assign({}, state,
        {loginSuccess:false});
    }

    case 'ERROR': {
      return Object.assign({}, state,
        {loginError:true});
    }

    default:
      return state;
  }
};
