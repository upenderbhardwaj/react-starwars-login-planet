import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPlanets } from '../../actions/searchActions';
import { loginCharacter } from '../../actions/loginActions';
import { getPlanetDetails, clearPlanetDetails } from '../../actions/planetDetailsActions';
import Search from '../../components/Search';
import PlanetDetails from '../../components/PlanetDetails';
import OverlayBottomTop from '../../components/Overlay/OverlayBottomTop';
import Login from '../../components/Login';
import './styles.css';

class StarWarsSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      password: '',
      showLogin: true,
      showSearch: false,
      count: 0,
      placeholder: 'Star Wars Planet Search'
    };
    this.getCounter = this.getCounter.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(this.getCounter, 60000);
  }
  getCounter(){
    this.setState({count:0})
  }

  searchPlanets = ({ target }) => {
    const { searchPlanets } = this.props;
    const { value } = target;
    let count = this.state.count;
    this.setState({count: count + 1});
    searchPlanets(value);
  };

  inputHandler = ( event ) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    })
  };

   loginCharacter = () => {
    this.props.loginCharacter(this.state.username, this.state.password);
  }; 

  logoutHandler= () =>{
    this.setState({showSearch:false,showLogin:true})
  }

  componentWillReceiveProps(nexProps){
    if(nexProps.planet){
      this.priorityService.show();
    }
    if(nexProps.login.loginSuccess){
      this.setState({showSearch:true,showLogin:false})
    }
  }

  render() {
    const {
      results,
      planet,
      getPlanetDetails,
      clearPlanetDetails
    } = this.props;

    const searchValid = this.state.username==='Luke Skywalker'? true :
     (this.state.count>15 ? false :true);

    return (
      <div>
        {this.state.showLogin && 
        <Login
          usernamePlaceholder='Username'
          passwordPlaceholder='Password'
          inputHandler={this.inputHandler}
          loginHandler={this.loginCharacter}
        />}

        {this.state.showSearch && <div
        className={'search-container'}>
          <button 
            className={'logout'} 
            onClick={this.logoutHandler}>
            Logout
          </button>
          {searchValid ? <Search
            placeholder={this.state.placeholder}
            searchPlanets={this.searchPlanets}
            onInput={this.searchPlanets}
            results={results}
            onClick={getPlanetDetails}
        /> : <div> OOPS! max search per minute reached</div>
          }</div>}
     
        <OverlayBottomTop ref={(ref) => this.priorityService = ref} afterClose={clearPlanetDetails}>
          {planet && <PlanetDetails
                planet={planet}
                clearPlanetDetails={clearPlanetDetails}      
          />}
        </OverlayBottomTop>
      </div>
    );
  }
}

const mapStateToProps = ({ results, planet, login }) => {
  return {
    results,
    planet,
    login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPlanets: term => dispatch(searchPlanets(term)),
    getPlanetDetails: id => dispatch(getPlanetDetails(id)),
    clearPlanetDetails: () => dispatch(clearPlanetDetails()),
    loginCharacter: (username,password)=> dispatch(loginCharacter(username,password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);
