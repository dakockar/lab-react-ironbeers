import React, { Component } from 'react'
import Header from './Header'

export default class NewBeerForm extends Component {
    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.props.onSubmit} >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="tagline">Tagline</label>
                        <input type="text" name="tagline" id="tagline" />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows="5" />
                    </div>
                    <div>
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input type="text" name="first_brewed" id="first_brewed" />
                    </div>
                    <div>
                        <label htmlFor="brewers_tips">Brewers Tips</label>
                        <input type="text" name="brewers_tips" id="brewers_tips" />
                    </div>
                    <div>
                        <label htmlFor="attenuation_level">Attenuation Level</label>
                        <input type="number" name="attenuation_level" id="attenuation_level" />
                    </div>
                    <div>
                        <label htmlFor="contributed_by">Contributed By</label>
                        <input type="text" name="contributed_by" id="contributed_by" />
                    </div>
                    <button>ADD NEW</button>
                </form>
            </>
        )
    }
}
