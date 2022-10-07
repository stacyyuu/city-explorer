import React from 'react';
import './App.css';
import City from './City';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value })
  }

  getLocation = async (event) => {
    // base url
    // ? is called a query, everything that comes after will be everything we are asking data about 
    // key: YOUR_ACCESS_TOKEN
    // q: SEARCH_STRING
    // format: 'json'
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      console.log('URL: ', url);
      const response = await axios.get(url);
      console.log('response object: ', response);
      console.log('response.data[0]: ', response.data[0]);
      this.setState({ location: response.data[0] });
    } catch (error) {
      <Alert key='primary' variant='primary'>
      </Alert>
    }
  }


  render() {
    return (
      <div className="App">
        <h1>City Explorer</h1>
        <City
          location={this.state.location}
          handleChange={this.handleChange}
          getLocation={this.getLocation}
        />
      </div>
    );
  }
}

export default App;
