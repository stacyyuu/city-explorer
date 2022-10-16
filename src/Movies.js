import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Movies extends React.Component {
    render() {
        return (
            <Row xs={2} md={4} className="g-4">
                {this.props.movies.map(title => (
                    <Col>
                        <Card>
                            <Card.Img 
                                src={title.image_url}
                                alt={title.overview}
                            />
                            <Card.Body>
                                <Card.Text>
                                    Title: {title.name}
                                </Card.Text>
                                <Card.Text>
                                    Overview: {title.overview}
                                </Card.Text>
                                <Card.Text>
                                    Release Date: {title.released_on}
                                </Card.Text>
                                <Card.Text>
                                    Vote Count: {title.vote_count}
                                </Card.Text>
                                <Card.Text>
                                    Average Votes: {title.average_votes}
                                </Card.Text>
                                <Card.Text>
                                    Popularity: {title.popularity}
                                </Card.Text>
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