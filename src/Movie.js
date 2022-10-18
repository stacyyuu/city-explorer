import React from 'react';
import { Col, Card } from 'react-bootstrap';

class Movie extends React.Component {
    render() {
        const title = this.props.title;
        return (
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
            </Col >
        )
    }
}

export default Movie;