import React, { Component } from "react";
import axios from "axios";

import Quote from "../components/Quote/Quote";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: [
        {
          quote:
            "I'd like to be settled into somewhat of a normal life. Somewhat. I know it's never going to be completely normal.",
          author: "Michael Jordan",
          cat: "life"
        }
      ]
    };
  }

  clickHandler = () => {
    // when clicked adds a quote to the state
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(res => this.setState({ quote: [res.data] }));
  };

  render() {
    return (
      <div>
        <Quote quote={this.state.quote} click={this.clickHandler} />
      </div>
    );
  }
}

export default App;
