import { Card } from "react-bootstrap";

const SingleMovie = ({ movie }) => (
  <Card >
    <Card.Img src={movie.Poster} style={{height: "12rem"}} />
  </Card>
);

export default SingleMovie;
