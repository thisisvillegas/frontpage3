import React, {Component} from 'react';
import Clock from 'react-live-clock';

export default class MyComponent extends Component {
    render() {
        return (
            <div className="time">
                <Clock
                    format={'MMM DD YYYY'}
                    ticking={true}
                    timezone={'US/Central'}
                />
                <br />
                <Clock
                    format={'h:mm:ss a'}
                    ticking={true}
                    timezone={'US/Central'}
                />
            </div>
        );
    }
}
