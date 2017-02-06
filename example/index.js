import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../dist/index'; // Replace HelloWorld

class App extends React.Component { 
	render() {
		return <HelloWorld />; // Replace HelloWorld
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
