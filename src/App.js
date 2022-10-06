import React from 'react';
import './App.css';
import City from './City';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>City Explorer</h1>
        <City />
      </div>
    );
  }
}

export default App;
