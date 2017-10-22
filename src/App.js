import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopStories } from './api/NetworkService'
import CardSection from './components/CardSection'
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  getDataStories = () => {
    getTopStories()
      .then((data) => {
        console.log(data);
        const { saveDataStories } = this.props
        saveDataStories(data.results);
      })
  }

  componentDidMount() {
    this.props.onOnline();
    this.getDataStories();
  }

  render() {
    const { onlineState, data } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          is online App: {`${onlineState}`}
        </p>
        <CardSection data={data} />
      </div>
    );
  }
}

function mapStateToProps({reducer}) {
  const { online, data } = reducer;
  return {
    onlineState: online,
    data: data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onOnline: () => dispatch({type: 'init'}),
    closeApp: () => dispatch({type: 'close'}),
    saveDataStories: (payload) => dispatch({type: 'save', payload: payload})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
