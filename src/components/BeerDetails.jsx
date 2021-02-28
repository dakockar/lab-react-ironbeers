import React, { Component } from 'react'
import axios from "axios";
import Header from './Header';

export default class BeerDetails extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        if (this.props.isRandom) {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
                .then((result) => {
                    // console.log(result.data);
                    this.setState({ beer: result.data });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {
            const { beerId } = this.props.match.params;

            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                .then((result) => {
                    // console.log(result.data);
                    this.setState({ beer: result.data });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }


    render() {
        const { beer } = this.state;

        return (
            <>
                <Header />
                <div className="beer-details">
                    <img src={beer.image_url} alt="beer" />
                    <div>
                        <div className="title">
                            <h2>{beer.name}</h2> <span>{beer.attenuation_level}</span>
                        </div>
                        <div className="subtitle">
                            <span className="tagline" >{beer.tagline}</span>
                            <span className="first-brewed">{beer.first_brewed}</span>
                        </div>
                        <div className="description">{beer.description}</div>
                        <div className="created-by bold-grey">{beer.contributed_by ? beer.contributed_by : "unknown"}</div>
                    </div>
                </div>
            </>
        )
    }
}
