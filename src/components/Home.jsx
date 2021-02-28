import React, { Component } from 'react';
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
// import randomBeer from "../assets/random-beer.png";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to="/beers">
                    <img src={beers} alt="all beers" />
                    <h2>All Beers</h2>
                </Link>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse fermentum quam nibh, a mollis felis bibendum cursus.
                    </div>
                <Link to="/random-beer">
                    <img src={require("../assets/random-beer.png")} alt="random beer" />
                    <h2>Random Beer</h2>
                </Link>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse fermentum quam nibh, a mollis felis bibendum cursus.
                </div>
                <Link to="/new-beer">
                    <img src={newBeer} alt="new beer" />
                    <h2>New Beer</h2>
                </Link>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse fermentum quam nibh, a mollis felis bibendum cursus.
                </div>
            </div>
        )
    }
}
