import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class City extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.getLocation}>
            <Form.Control type="text" onChange={this.props.handleChange} placeholder="Search for a city" />
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
        </Container>

        {this.props.location.display_name &&
          <h2>The city we searched for is {this.props.location.display_name}</h2>
        }
        {<h2>The latitude is: {this.props.location.lat} </h2>}
        {<h2>The longitude is: {this.props.location.lon}</h2>}

      </>
    )
  }
}

export default City;