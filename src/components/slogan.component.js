import React, { Component } from 'react';
import '../frontpage.css';
import '@openfonts/alegreya-sc_all';
import Table from './table.component';
// import Clock from './clock.component';
// import Weather from './weather.component';
import Liverpool from './liverpool.component';
// import Geolocation from './geolocation.component';
// import { render } from '@testing-library/react';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

function backgroundPicker() {
    let backgroundPick = Math.floor(Math.random() * 9);
    // console.log(`Class${backgroundPick}`);
    return backgroundPick;
}

function manualChange(currentClass) {
    switch (currentClass) {
        case 'class1':
            document.body.classList.remove('class1');
            document.body.classList.add('class2');
            break;
        case 'class2':
            document.body.classList.remove('class2');
            document.body.classList.add('class3');
            break;
        case 'class3':
            document.body.classList.remove('class3');
            document.body.classList.add('class4');
            break;
        case 'class4':
            document.body.classList.remove('class4');
            document.body.classList.add('class5');
            break;
        case 'class5':
            document.body.classList.remove('class5');
            document.body.classList.add('class6');
            break;
        case 'class6':
            document.body.classList.remove('class6');
            document.body.classList.add('class1');
            break;
        default:
    }
}

function changeBackground() {
    let backgroundPick = backgroundPicker();

    switch (backgroundPick) {
        case 0:
            document.body.classList.remove('class1');
            document.body.classList.add('class1');
            break;
        case 1:
            document.body.classList.remove('class1');
            document.body.classList.add('class2');
            break;
        case 2:
            document.body.classList.remove('class1');
            document.body.classList.add('class3');
            break;
        case 3:
            document.body.classList.remove('class1');
            document.body.classList.add('class4');
            break;
        case 4:
            document.body.classList.remove('class1');
            document.body.classList.add('class5');
            break;
        case 5:
            document.body.classList.remove('class1');
            document.body.classList.add('class6');
            break;
        default:
    }
}

export default class frontpage extends Component {
    state = {};
    componentDidMount() {
        changeBackground();
    }

    render() {
        return (
            <div className="grid">
                <div className="cell">{/* <Clock /> */}</div>
                <div className="cell">
                    <Liverpool />
                </div>
                <div className="cell">{/* <Geolocation /> */}</div>

                <div className="cellLong">
                    {/* <div className="slogan">Be like water</div> */}
                    <Table />
                </div>

                <div className="cell"></div>
                <div className="cell">
                    <div
                        className="button"
                        onClick={() => {
                            manualChange(document.body.className);
                        }}
                    >
                        change background
                    </div>
                </div>
                <div className="cell"></div>
            </div>
        );
    }
}
