//84960b065eba18ce6f9782f9a1cf74cc

import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: this.props.data.latitude,
            lon: this.props.data.longitude,
            part: 'part',
            city: ' .. ',
        };
    }

    componentDidMount() {
        axios
            .get(
                `https://open.mapquestapi.com/geocoding/v1/reverse?key=LqwGyLhdp5yvJkD3Mmfr16RETGs6aVnV&location=${this.props.data.latitude},${this.props.data.longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
            )
            .then(res => {
                this.setState({
                    city: res.data.results[0].locations[0].adminArea5,
                });
                // console.log('res.data', res.data);
            })
            .catch(err => console.log(err));

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=${this.state.part}&appid=84960b065eba18ce6f9782f9a1cf74cc&units=imperial`
            )
            .then(res => {
                this.setState({
                    ...res.data,
                });
                // console.log('res.data', res.data);
            })
            .catch(err => console.log(err));
    }

    render() {
        // console.log('this.state', this.state);
        return (
            <div className="weather">
                <h3>{this.state.city}</h3>
                {this.state.current ? (
                    <p>Feels like {this.state.current.feels_like}</p>
                ) : (
                    <div>Loading</div>
                )}
                {this.state.current ? (
                    <p>{this.state.current.weather[0].description}</p>
                ) : (
                    <div>Loading</div>
                )}
                {/* {this.state.current ? <p>{this.state.current.weather[0].main}</p> : <div>Loading</div>} */}
                {this.state.current ? (
                    <p>Wind Speed {this.state.current.wind_speed}</p>
                ) : (
                    <div>Loading</div>
                )}
                {this.state.current ? (
                    <p>Humidity {this.state.current.humidity}</p>
                ) : (
                    <div>Loading</div>
                )}
            </div>
        );
    }
}
