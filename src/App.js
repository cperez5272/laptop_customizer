import React, { Component } from 'react';
import Header from './Header.js'
import Summary from './Summary'
import Features from './Features'
import selected from './Data'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
constructor() {
  super()
  this.state = {
    selected: selected
  }
}

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <Features selected={this.state.selected} features={this.props.features}/>
        <Summary selected={this.state.selected}/>
        
      </div>
    );
  }
}

export default App;
