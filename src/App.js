import React from 'react';
import './App.css';
import City from './City';
import axios from 'axios';
import Weather from './Weather';
import Movies from './Movies';
import Footer from './Footer';
import Header from './Header';
import Alert from 'react-bootstrap/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      lat: '',
      lon: '',
      location: '',
      weather: [],
      movies: [],
      errAlert: false,
      errMessage: ''
    }
  }

  handleChange = (event) => {
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
      this.setState({
        location: response.data[0],
        lat: response.data[0].lat,
        lon: response.data[0].lon,
        errAlert: false
      },
        () => {
          this.getWeather();
          this.getMovies();
        });
    } catch (error) {
      console.error(error);
      this.setState({ location: '', errAlert: true, errMessage: error.response.data.error });
    };
  }

  getWeather = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.lat}&lon=${this.state.lon}`;
      let response = await axios.get(url);
      console.log('Weather Data From Server: ', response.data);
      this.setState({ weather: response.data });
    } catch (error) {
      console.error(error);
      this.setState({ weather: [], errAlert: true, errMessage: error.response.data.error });
    };
  }

  getMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
      let response = await axios.get(url);
      console.log('Movie Data From Server: ', response.data);
      this.setState({ movies: response.data });
    } catch (error) {
      console.error(error);
      this.setState({ movies: [], errAlert: true, errMessage: error.response.data.error });
    };
  }


  render() {
    return (
      <div className="App">
        <Header
        />
        {this.state.errAlert &&
          <Alert key='primary' variant='primary'>
            <h2>{this.state.errMessage}</h2>
          </Alert>
        }        
        <City
          location={this.state.location}
          handleChange={this.handleChange}
          getLocation={this.getLocation}
          errAlert={this.state.errAlert}
        />
        <Weather
          weather={this.state.weather}
        />
        <Movies
          movies={this.state.movies}
        />
        <Footer
        />
      </div>
    );
  }
}

export default App;
