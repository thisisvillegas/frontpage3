import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class austinStats extends Component {
    
    state = {};
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {season: '2022', team: '16489', timezone:'America/Chicago', next:'1'},
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_KEY}`,
            },
        })
            .then(response => {
                console.log('fixture api:',response.data.response[0].teams);
                this.setState({
                    date: response.data.response[0].fixture.date,
                    ...response.data.response[0].teams,
                });
            })
            .catch(error => {
                console.log(error);
            });

        axios({
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {season: '2022', league: '253', team: '16489'},
            headers: {
                'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_KEY}`,
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            },
        })
            .then(response => {
                console.log(
                    response.data.response[0].league.standings[0][0].rank
                );
                this.setState({
                    rank: response.data.response[0].league.standings[0][0].rank,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        console.log('austin.state', this.state);
        return (
            <div className="liverpool">
                {this.state.away ? (
                    <div className="teamBadge">
                        <img src={this.state.away.logo} alt="new" />
                        {this.state.away.name === 'Austin' ? (
                            <p>
                                {this.state.rank}
                                {'. '}
                                {this.state.away.name}
                            </p>
                        ) : (
                            <p>{this.state.away.name}</p>
                        )}
                    </div>
                ) : (
                    <p>not loaded</p>
                )}
                {'  @   '}
                {this.state.home ? (
                    <div className="teamBadge">
                        <img src={this.state.home.logo} alt="new" />
                        {this.state.home.name === 'Austin' ? (
                            <p>
                                {this.state.rank}
                                {'. '}
                                {this.state.home.name}
                            </p>
                        ) : (
                            <p>{this.state.home.name}</p>
                        )}
                    </div>
                ) : (
                    <p>not loaded</p>
                )}
                {this.state.date ? (
                    <h4>
                        {moment(this.state.date).format('MMMM Do YYYY')}
                    </h4>
                ) : (
                    <h4>not loaded</h4>
                )}
            </div>
        );
    }
}

export default austinStats;
