import React, { Component } from 'react'
import Header from './Header';
import { Link } from "react-router-dom";

export default class BeerList extends Component {

    render() {
        const { beers, onChange } = this.props;

        return (
            <div>
                <Header />
                <input onChange={onChange} type="text" />
                {
                    beers.length
                        ? beers.map(beer => {
                            return (
                                <Link to={`/beers/${beer._id}`} key={beer._id}>
                                    <div className="list-item" >
                                        <div className="img-box">
                                            <img src={beer.image_url} alt="beer_img" />
                                        </div>
                                        <div className="beer-info">
                                            <h3>{beer.name}</h3>
                                            <div className="tagline">{beer.tagline}</div>
                                            <div className="created-by"><b>Created by:</b> {beer.contributed_by ? beer.contributed_by : "unknown"}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                        : <div className="no-match">no such beer</div>
                }
            </div>
        )
    }
}
