import React from 'react';
import './App.css';
import City from './City';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
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
      this.setState({ location: response.data[0], errAlert: false });
    } catch (error) {
      console.log('Error: Unable to Geocode!');
      this.setState({ location: {}, errAlert: true });
    };
  }

  // getWeather = async () => {
  // try {
  // const url = `${process.env.REACT_APP_SERVER}/shopping-list?bananas=food`;
  // const response = await axios.get(url);
  // console.log(response.data);
  // this.setState({shoppingList: response.data})
  // } catch(error){
  // next can be used to pass an error to express for the error middleware to handle 
  // next(error);
  // }
  //}

  // <ul> {this.state.shoppingList.map((item, idx) => (
  // <li key ={idx}>
  // <p> My Items: </p>
  // <p>{item.name} = {item.description}
  // </li> </ul>
  // ))}

  // error handling middleware MUST be last app.use() defined in server file
  // app.use((error, request, response, next) => { console.log(error); response.status(500).send(error);}); 

  render() {
    return (
      <div className="App">
        <h1>City Explorer</h1>
        <City
          location={this.state.location}
          handleChange={this.handleChange}
          getLocation={this.getLocation}
          errAlert={this.state.errAlert}
        />
      </div>
    );
  }
}

export default App;
