import React, { Component } from 'react'
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from "axios";
import Home from './components/Home';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import NewBeerForm from './components/NewBeerForm';

class App extends Component {

  state = {
    beers: [],
    clonedBeers: [],
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        // console.log(result.data);
        this.setState({ beers: result.data, clonedBeers: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleAddBeer = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = e.target;

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((result) => {
        console.log(result);
        this.setState({
          beers: [...this.state.beers, result.data],
          clonedBeers: [...this.state.clonedBeers, result.data]
        }, () => {
          console.log(this.props);
          this.props.history.push("/beers");
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    let query = e.target.value;

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          clonedBeers: result.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {

    if (!this.state.beers.length) return null;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers"
            render={routeProps => <BeerList onChange={this.handleSearch} beers={this.state.clonedBeers} {...routeProps} />} />
          <Route path="/beers/:beerId" component={BeerDetails} />
          <Route path="/random-beer" render={(routeProps) => <BeerDetails isRandom {...routeProps} />} />
          <Route path="/new-beer" render={routeProps => {
            return <NewBeerForm onSubmit={this.handleAddBeer} {...routeProps} />
          }} />

        </Switch>

      </div>
    )
  }
}

export default withRouter(App);