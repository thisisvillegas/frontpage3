import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class austinStats extends Component {
  state = {};
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://bible-search.p.rapidapi.com/random-verse",
      headers: {
        "X-RapidAPI-Key": "e4107e33e5msh76c70dcc39cafacp14663bjsn1ede35f0193b",
        "X-RapidAPI-Host": "bible-search.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log("bibleVerse api:", response.data[0].text);
        this.setState({
            ...response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log("bible.state", this.state);
    let googleSearchString = `https://google.com/search?q=${this.state.book_name}+${this.state.chapter}+${this.state.verse}`
    return (
      <div className="bibleVerse">
        {this.state.text ? (
          <div>
            <p>
            <a href={googleSearchString}>{this.state.book_name} {this.state.chapter}:{this.state.verse} ({this.state.tags[0] === 'old_testament'? 'Old Testament' : 'New Testament'})</a>
            </p>
            <p>
                {this.state.text}
            </p>
          </div>
        ) : (
          <p>not loaded</p>
        )}
      </div>
    );
  }
}

export default austinStats;
