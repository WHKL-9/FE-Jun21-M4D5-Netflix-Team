import SingleMovie from './SingleMovie'
import {Col} from 'react-bootstrap'

const MovieList = ({movies}) =>(
    <Col xs={12} sm={6} md={4} lg={2}>
        {movies.map(movie =>(
        <SingleMovie movie={movie.Title} key={movie.imdbID}/>
    ))}
    </Col>   
)
   
export default MovieList





