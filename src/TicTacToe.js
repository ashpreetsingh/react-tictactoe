import React, { Fragment } from "react";
import Button from "./components/button.js";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: ["?", "?", "?", "?", "?", "?", "?", "?", "?", "RESET"],
      counter: 0
    };
  }
  clicked = i => {
    let color = this.state.color;
    color = "tomato";

    let btns = this.state.buttons;
    let counter = this.state.counter;
    if (btns[i] == "RESET") {
      // console.log("RESETET Called")
      this.setState({
        buttons: ["?", "?", "?", "?", "?", "?", "?", "?", "?", "RESET"],
        counter: 0
      });
    }

    counter += 1;
    let player = "?";
    if (counter % 2 == 0) {
      player = "X";
    } else {
      player = "O";
    }

    if (btns[i] == "?") btns[i] = player;

    this.setState({ btns, counter });
    // console.log(btns);
    if (btns[i] != "RESET") {
      if (
        (btns[0] == "X" && btns[1] == "X" && btns[2] == "X") ||
        (btns[3] == "X" && btns[4] == "X" && btns[5] == "X") ||
        (btns[6] == "X" && btns[7] == "X" && btns[8] == "X") ||
        (btns[0] == "X" && btns[3] == "X" && btns[6] == "X") ||
        (btns[1] == "X" && btns[4] == "X" && btns[7] == "X") ||
        (btns[2] == "X" && btns[5] == "X" && btns[8] == "X") ||
        (btns[0] == "X" && btns[4] == "X" && btns[8] == "X") ||
        (btns[2] == "X" && btns[4] == "X" && btns[6] == "X")
      ) {
        alert("Player X won");
      } else if (
        (btns[0] == "O" && btns[1] == "O" && btns[2] == "O") ||
        (btns[3] == "O" && btns[4] == "O" && btns[5] == "O") ||
        (btns[6] == "O" && btns[7] == "O" && btns[8] == "O") ||
        (btns[0] == "O" && btns[3] == "O" && btns[6] == "O") ||
        (btns[1] == "O" && btns[4] == "O" && btns[7] == "O") ||
        (btns[2] == "O" && btns[5] == "O" && btns[8] == "O") ||
        (btns[0] == "O" && btns[4] == "O" && btns[8] == "O") ||
        (btns[2] == "O" && btns[4] == "O" && btns[6] == "O")
      ) {
        alert("Player O won");
      }
    }
    // this.won();
  };
  // RESETet = () => {
  //   let btns = this.state.buttons;
  //   btns = btns.map((data, i) => {
  //     if (data != "RESET") return "?";
  //     else return "RESET";
  //   });
  //   // console.log(newBtns);
  //   let counter = this.state.counter;
  //   counter = 0;
  //   this.setState({ btns, counter });
  // };
  won = () => {
    let btns = this.state.btns;
    if (
      (btns[0] == "X" && btns[1] == "X" && btns[2] == "X") ||
      (btns[3] == "X" && btns[4] == "X" && btns[5] == "X") ||
      (btns[6] == "X" && btns[7] == "X" && btns[8] == "X") ||
      (btns[0] == "X" && btns[3] == "X" && btns[6] == "X") ||
      (btns[1] == "X" && btns[4] == "X" && btns[7] == "X") ||
      (btns[2] == "X" && btns[5] == "X" && btns[8] == "X") ||
      (btns[0] == "X" && btns[4] == "X" && btns[8] == "X") ||
      (btns[2] == "X" && btns[4] == "X" && btns[6] == "X")
    ) {
      alert("Player X won");
    } else if (
      (btns[0] == "O" && btns[1] == "O" && btns[2] == "O") ||
      (btns[3] == "O" && btns[4] == "O" && btns[5] == "O") ||
      (btns[6] == "O" && btns[7] == "O" && btns[8] == "O") ||
      (btns[0] == "O" && btns[3] == "O" && btns[6] == "O") ||
      (btns[1] == "O" && btns[4] == "O" && btns[7] == "O") ||
      (btns[2] == "O" && btns[5] == "O" && btns[8] == "O") ||
      (btns[0] == "O" && btns[4] == "O" && btns[8] == "O") ||
      (btns[2] == "O" && btns[4] == "O" && btns[6] == "O")
    ) {
      alert("Player O won");
    }
  };
  color = i => {
    if (this.state.buttons[i] == "X") return "tomato";
    else return "blue";
  };
  render() {
    return (
      <Fragment>
        <h1>Tic Tac Toe</h1>
        <h3>Instructions :</h3>
        <ul>
          <li>First move is O</li>
          <li>Last move is highlighted by red color</li>
          <li>Winner would be alerted on browser tab</li>
          <li>Use reset button to play again</li>
        </ul>

        {this.state.buttons.map((data, i) => {
          if (i % 3 == 0 && data != "RESET")
            return (
              <Fragment key={i}>
                <br />

                <Button
                  key={i}
                  label={data}
                  handleClick={this.clicked}
                  index={i}
                />
              </Fragment>
            );
          else if (data == "RESET")
            return (
              <Fragment>
                <br />
                <Button
                  label={data}
                  index={i}
                  handleClick={this.clicked}
                  key={i}
                />
              </Fragment>
            );
          else
            return (
              <Button
                label={data}
                index={i}
                handleClick={this.clicked}
                key={i}
              />
            );
        })}
      </Fragment>
    );
  }
}
export default MyComponent;
