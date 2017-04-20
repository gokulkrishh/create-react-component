import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class HelloWorld extends React.Component {
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
  title: PropTypes.string.isRequired
};

// Default proptypes
HelloWorld.defaultProps = {
  title: "Hello"
};
