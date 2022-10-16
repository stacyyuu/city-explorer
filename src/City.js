import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image'

class City extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.getLocation}>
            <Form.Control className= "formInput" type="text" onChange={this.props.handleChange} placeholder="Search for a city..." />
            <Button variant="secondary" type="submit">
              Explore!
            </Button>
          </Form>
        </Container>

        {this.props.location.display_name &&
          <>
            <div>
              <Image
                className='mapImage'
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom=14`}
                alt='Map of City'
              />
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>City Name</Accordion.Header>
                <Accordion.Body>
                  <h2>{this.props.location.display_name}</h2>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Latitude</Accordion.Header>
                <Accordion.Body>
                  <h2>{this.props.location.lat}</h2>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Longitude</Accordion.Header>
                <Accordion.Body>
                  <h2>{this.props.location.lon}</h2>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        }
      </>
    )
  }
}

export default City;