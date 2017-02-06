import React, { Component } from 'react';

export default class HelloWorld extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  	const {title} = this.props;
    return (
      <h1>{title}</h1>
    );
  }
}

// Proptypes
HelloWorld.propTypes = {
  title: React.PropTypes.string.isRequired
};

// Default proptypes
HelloWorld.defaultProps = {
  title: "Hello"
};
