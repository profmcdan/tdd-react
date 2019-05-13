import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };
  render() {
    const { text, emitEvent } = this.props;
    return (
      <button onClick={emitEvent} data-test="button-component" type="submit">
        {text}
      </button>
    );
  }
}

SharedButton.propTypes = {
  text: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
