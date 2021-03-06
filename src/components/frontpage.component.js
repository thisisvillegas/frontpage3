import "@openfonts/alegreya-sc_all";
import React, { Component } from "react";
import "../frontpage.css";
import Clock from "./clock.component";
// import Slogan from './slogan.component';
import Geolocation from "./geolocationV3.component";
import Liverpool from "./liverpool.component";
import AustinFC from "./austinFC.component";
import Table from "./tableV3.component";
import CryptoStats from "./crypto.component";
import Modal from "./modalV2.component";
import BibleVerse from "./bibleVerse.component";

function backgroundPicker() {
  let backgroundPick = Math.floor(Math.random() * 6);
  // console.log(`Class${backgroundPick}`);
  return backgroundPick;
}

function manualChange(currentClass) {
  switch (currentClass) {
    case "class1":
      document.body.classList.remove("class1");
      document.body.classList.add("class2");
      break;
    case "class2":
      document.body.classList.remove("class2");
      document.body.classList.add("class3");
      break;
    case "class3":
      document.body.classList.remove("class3");
      document.body.classList.add("class4");
      break;
    case "class4":
      document.body.classList.remove("class4");
      document.body.classList.add("class5");
      break;
    case "class5":
      document.body.classList.remove("class5");
      document.body.classList.add("class6");
      break;
    case "class6":
      document.body.classList.remove("class6");
      document.body.classList.add("class1");
      break;
    default:
  }
}

function changeBackground() {
  let backgroundPick = backgroundPicker();

  switch (backgroundPick) {
    case 0:
      document.body.classList.remove("class1");
      document.body.classList.add("class1");
      break;
    case 1:
      document.body.classList.remove("class1");
      document.body.classList.add("class2");
      break;
    case 2:
      document.body.classList.remove("class1");
      document.body.classList.add("class3");
      break;
    case 3:
      document.body.classList.remove("class1");
      document.body.classList.add("class4");
      break;
    case 4:
      document.body.classList.remove("class1");
      document.body.classList.add("class5");
      break;
    case 5:
      document.body.classList.remove("class1");
      document.body.classList.add("class6");
      break;
    default:
  }
}

export default class frontpage extends Component {
  state = {};
  componentDidMount() {
    // axios
    //     .get(
    //         `http://192.241.189.29:5001/api/userdetails/${this.props.match.params.username}`
    //     )
    //     .then(res => {
    //         // console.log('user in props', this.props.match.params.username);
    //         // console.log('user data', res.data[0]);
    //         if (res.data.length > 0) {
    //             this.setState({
    //                 ...res.data[0],
    //             });
    //         }
    //     });
    changeBackground();
  }

  render() {
    // console.log('this.state in FP', this.state);
    return (
      <div className="grid">
        <div className="cell">
          <Clock />
        </div>
        <div className="cell">
          {/* <Modal /> */}
          <div
            className="button"
            onClick={() => {
              manualChange(document.body.className);
            }}
          >
            change background
          </div>
        </div>
        <div className="cell">
          <Geolocation />
        </div>
        <div className="cell">
          {/* <Liverpool /> */}
        </div>
        <div className="cell">
          <Table />
          {/* <Table payload={list} /> */}
        </div>
        <div className="cell">
          {/* <AustinFC /> */}
        </div>
        <div className="cellLong">
          <BibleVerse />
        </div>
      </div>
    );
  }
}
