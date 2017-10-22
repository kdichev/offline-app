import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getTopStories } from './api/NetworkService'

export class App extends Component {
  getDataStories = () => {
    getTopStories()
      .then(data => {
        console.log('Data:', data)
      })
  }

  componentDidMount() {
    this.props.onOnline();
    this.getDataStories();
  }

  render() {
    const { onlineState } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          is online App: {`${onlineState}`}
        </p>
      </div>
    );
  }
}

function mapStateToProps({reducer}) {
  const { online } = reducer;
  return {
    onlineState: online
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onOnline: () => dispatch({type: 'init'}),
    closeApp: () => dispatch({type: 'close'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
