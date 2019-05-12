import React, { Component } from "react";
import PropTypes from "prop-types";

class Posts extends Component {
  render() {
    const { title, description } = this.props;
    if (!title) {
      return null;
    }
    return (
      <div data-test="post-component">
        <h3 data-test="post-title">{title}</h3>
        <p data-test="post-desc">{description}</p>
      </div>
    );
  }
}

Posts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Posts;
