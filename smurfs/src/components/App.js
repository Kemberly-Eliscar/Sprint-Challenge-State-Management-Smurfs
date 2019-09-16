import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfList from './smurfList'
import SmurfFormik from './smurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfFormik/>
        <SmurfList/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    title: state.title,
    smurf : state.smurfs
  }
}

export default connect(mapStateToProps,{})(App);
