import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <img src={require("../assets/home-icon.png")} alt="home" />
                </Link>
            </header>
        )
    }
}
