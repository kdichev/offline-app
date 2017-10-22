import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopStories } from './api/NetworkService';
import CardSection from './components/CardSection';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

export class App extends Component {
  getDataStories = () => {
    getTopStories()
      .then((data) => {
        const { saveDataStories } = this.props
        saveDataStories(data);
      })
  }

  componentDidMount() {
    this.getDataStories();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          New York Times Top Stories:
        </p>
        <div>{moment().format('LLLL')}</div>
        <CardSection data={data} />
      </div>
    );
  }
}

function mapStateToProps({reducer}) {
  const { data, date } = reducer;
  return {
    data: data,
    date: date
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveDataStories: (payload) => dispatch({
      type: 'save',
      payload: payload.results,
      lastUpdated: payload.last_updated
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
