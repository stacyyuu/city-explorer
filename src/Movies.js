import React from 'react';
import Movie from './Movie';
import Row from 'react-bootstrap/Row';

class Movies extends React.Component {
    render() {
        return (
            <Row xs={2} md={4} className="g-4">
                {this.props.movies.map(title => (
                    <Movie
                        title={title}
                    />
                ))
                }
            </Row>
        )
    }
}


export default Movies;
