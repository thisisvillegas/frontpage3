import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class liverpoolStats extends Component {
    state = {};
    componentDidMount() {
        axios({
            method: 'GET',
            url:
                'https://api-football-v1.p.rapidapi.com/v2/fixtures/team/40/next/1?timezone=America/Chicago',
            headers: {
                'content-type': 'application/octet-stream',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key':
                    'e4107e33e5msh76c70dcc39cafacp14663bjsn1ede35f0193b',
                useQueryString: true,
            },
        })
            .then(response => {
                // console.log(response.data.api.fixtures[0]);
                this.setState({
                    ...response.data.api.fixtures[0],
                });
            })
            .catch(error => {
                console.log(error);
            });

        // axios
        //     .get()
        //     .then(res => {
        //         this.setState({
        //             ...res.data,
        //         });
        //     })
        //     .catch(err => console.log(err));
    }
    render() {
        // console.log('this.state', this.state);
        return (
            <div className="liverpool">
                {this.state.awayTeam ? (
                    <div className="teamBadge">
                        <img src={this.state.awayTeam.logo} alt="new" />
                        <p>{this.state.awayTeam.team_name}</p>
                    </div>
                ) : (
                    <p>not loaded</p>
                )}
                {'  @   '}
                {this.state.homeTeam ? (
                    <div className="teamBadge">
                        <img src={this.state.homeTeam.logo} alt="new" />
                        <p>{this.state.homeTeam.team_name}</p>
                    </div>
                ) : (
                    <p>not loaded</p>
                )}
                {this.state.event_date ? (
                    <h4>
                        {moment(this.state.event_date).format('MMMM Do YYYY')}
                    </h4>
                ) : (
                    <h4>not loaded</h4>
                )}
            </div>
        );
    }
}

export default liverpoolStats;
