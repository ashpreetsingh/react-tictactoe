import React, { Fragment } from "react";
import "../styles.css";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({ color: "tomato" });
    // alert("Clicked");
    // console.log(this.state);
    // if (this.state.label === "Click") this.setState({ label: "Logout" });
    // else this.setState({ label: "Click" });

    this.props.handleClick(this.props.index);
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.handleClick} className="buttonStyle">
          {this.props.label}
        </button>
      </Fragment>
    );
  }
}

export default Button;
