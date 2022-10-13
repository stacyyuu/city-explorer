import React from 'react';
import Accordion from "react-bootstrap/Accordion";


class Weather extends React.Component {
    render() {
        return (
            <>
                {this.props.weather.map(day => (
                    < Accordion >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Weather on {day.date}</Accordion.Header>
                            <Accordion.Body><h2>{day.description}</h2></Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
                }
            </>
        )
    }
}


export default Weather;