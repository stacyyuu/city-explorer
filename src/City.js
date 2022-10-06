import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class City extends React.Component {
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

  getLocation = async () => {
    // base url
    // ? is called a query, everything that comes after will be everything we are asking data about 
    // key: YOUR_ACCESS_TOKEN
    // q: SEARCH_STRING
    // format: 'json'
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log('URL: ', url);
    const response = await axios.get(url);
    console.log('response object: ', response);
    console.log('response.data[0]: ', response.data[0]);
    this.setState({ location: response.data[0] });
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Control type="text" onChange={this.handleChange} placeholder="Search for a city" />
            <Button variant="primary" type="submit" onClick={this.getLocation}>
              Explore!
            </Button>
          </Form>
        </Container>

        {this.state.location.display_name &&
          <h2>The city we searched for is {this.state.location.display_name}</h2>
        }
      </>
    )
  }
}

export default City;