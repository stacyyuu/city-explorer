import React from 'react';
import Accordion from "react-bootstrap/Accordion";


class Movies extends React.Component {
    render() {
        return (
            <>
                {this.props.movies.map(title => (
                    < Accordion >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Movies</Accordion.Header>
                            <Accordion.Body>{title.name}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
                }
            </>
        )
    }
}


export default Movies;