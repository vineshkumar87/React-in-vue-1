import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string
};

export default class HelloReact extends React.Component {
  render() {
    return <div>Hello {this.props.name}, I am a React component</div>;
  }
}

HelloReact.propTypes = propTypes;
