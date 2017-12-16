import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.setTimeout(() => {
      this.props.increase()
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>{this.props.count}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state)
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch({
      type: 'INCREMENT'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
