import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'initial title',
      name: 'initial name'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      name: 'new app name',
      title: 'New app title'
    });
  }

  render() {
    return (
      <div className='App'>
        <input value='name'></input>
      </div>
    );
  }
}

export default App;
