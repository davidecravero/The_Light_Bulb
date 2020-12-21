import React, { Component } from "react";
import ButtonClass from "./Button.class";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lightOn: false,
      lightToggleCounter: 0
    };
    // Important line in order to have access to the correct value of "this"
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.lightToggleCounter < 10) {
      // setting lightOn true
      // incrementing the lightCounter
      // setTimeout, reset lightOn to false
      this.setState({
        lightOn: true,
        lightToggleCounter: this.state.lightToggleCounter + 1
      });
      // ... => spread operator (explained at the end of the file)
      setTimeout(() => this.setState({ ...this.state, lightOn: false }), 5000);
    } else {
      alert("Stop using electricity");
    }
  }

  render() {
    return (
      <>
        <div className="block">
          <h1>The Light Bulb</h1>
          Your goal: switch the lightbulb on
          <br />
          <ul>
            <li>
              In a functional component, create a state that will keep track of
              whether the lightbulb is turned on or not
            </li>
            <li>
              Put an onClick handler on the <strong>turn me on</strong> button
              that will change the lightbulb's state from on to off
            </li>
            <li>
              Using the state as a toggler, conditionaly change the className of
              the lightbulb's holding div from <em>"block"</em> to{" "}
              <em>"block night"</em>
            </li>
            <li>
              Let's think about the planet and not be wasteful. Make sure that
              the lightbulb turns itself off after 5 seconds :)
            </li>
            <li>
              Using another state, keep track of how many times the light bulb
              has been turned on. After 10 times, tell the user he used his
              daily electricity limit and should light a candle instead.
            </li>
          </ul>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.reactjs.org/docs/hooks-state.html"
          >
            Help
          </a>
        </div>

        <div className={`block ${this.state.lightOn ? "night" : ""}`}>
          <ButtonClass value="Toggle light" whenClicked={this.handleClick} />
          <div className="container">
            <div className="bulb-light">
              <div id="light" />

              <div id="bulb">
                <div className="bulb-top">
                  <div className="reflection" />
                </div>
                <div className="bulb-middle-1" />
                <div className="bulb-middle-2" />
                <div className="bulb-middle-3" />
                <div className="bulb-bottom" />
              </div>

              <div id="base">
                <div className="screw-top" />
                <div className="screw-a" />
                <div className="screw-b" />
                <div className="screw-a" />
                <div className="screw-b" />
                <div className="screw-a" />
                <div className="screw-b" />
                <div className="screw-c" />
                <div className="screw-d" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

const person = {
  firstname: "Aria",
  lastname: "groult"
};

const foo = { ...person, lastname: "Dennis", age: 105 };

// {firstname: "Aria", lastname: "Dennis", age: 105}
