import React, {Component} from 'react';
import axios from 'axios';

class cryptoStats extends Component {
    state = {};
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://min-api.cryptocompare.com/data/price',
            params: {fsym: 'ZEC', tsyms: 'USD'},
            headers: {
                authorization: `${process.env.CRYPTO_KEY}`,
            },
        })
            .then(response => {
                // console.log(response);
                this.setState({
                    ...response.data,
                });
            })
            .catch(error => {
                console.log(error);
            });

        axios({
            method: 'GET',
            url: 'https://min-api.cryptocompare.com/data/v2/histoday',
            params: {fsym: 'ZEC', tsym: 'USD', limit: 1},
            headers: {
                authorization: `${process.env.CRYPTO_KEY}`,
            },
        })
            .then(response => {
                // console.log(response.data.Data.Data[1]);
                this.setState({
                    history: response.data.Data.Data[1],
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        console.log('crypto.state', this.state);
        return (
            <div className="crypto">
                <p>ZCash {this.state.USD}</p>
                {this.state.history ? (
                    <p>High {this.state.history.high}</p>
                ) : (
                    <p>not loaded</p>
                )}
                {this.state.history ? (
                    <p>Low {this.state.history.low}</p>
                ) : (
                    <p>not loaded</p>
                )}
            </div>
        );
    }
}

export default cryptoStats;
