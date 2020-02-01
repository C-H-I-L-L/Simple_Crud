import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.any
};

const defaultProps = {
  name: 'Default name of App'
};

class MyComponent extends Component {
  UNSAFE_componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    const { title, name, onClick } = this.props;

    return (
      <div className='component'>
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick}> click meeeeeeeeeeeee</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
