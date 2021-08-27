import SingleMovie from "./SingleMovie";
import { Col } from "react-bootstrap";

const MovieList = ({ movie }) => (
  <Col xs={12} sm={6} md={4} lg={2}>
      <SingleMovie movie={movie} key={movie.imdbID}/>
  </Col>
);

export default MovieList;
