import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import { Row, Col, Card } from 'react-bootstrap';

class Movies extends React.Component {
    render() {
        return (
            <Row>
                {this.props.movies.map(title => (
                    <Col>
                        <Card>
                            <Card.Img 
                                src={title.img_url}
                                alt={title.overview}
                            />
                            <Card.Body>
                                <Card.text>
                                    Title: {title.original_title}
                                </Card.text>
                                <Card.text>
                                    Overview: {title.overview}
                                </Card.text>
                                <Card.text>
                                    Released: {title.release_date}
                                </Card.text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        )
    }
}


export default Movies;