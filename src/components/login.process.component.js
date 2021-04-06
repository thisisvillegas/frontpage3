import React, { Component } from 'react';
import FrontPage from './frontpage.component';
import Slogan from './slogan.component';
// import axios from 'axios';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';

class login extends Component {
    // state = {};
    // componentDidMount() {
    //     axios.get('http://localhost:5001/userdetails/').then(res => {
    //         console.log('res', res);
    //         if (res.data.length > 0) {
    //             this.setState({
    //                 ...res.data,
    //             });
    //         }
    //     });
    // }
    render() {
        // console.log('this.state', this.state);

        return (
            <Router history={HashRouter}>
                <div>
                    <Route path="/:username" exact component={FrontPage} />
                    <Route path="/" exact component={Slogan} />
                </div>
            </Router>
        );
    }
}

export default login;
