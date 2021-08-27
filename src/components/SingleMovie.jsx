import { Card, Button, Modal } from "react-bootstrap";

const MovieComment = (movie) => (
  <Modal.Dialog key={movie.imdbID}>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
);

const SingleMovie = ({ movie }) => (
  <>
    <Card key={movie.imdbID}>
      <Card.Img src={movie.Poster} style={{ height: "12rem" }} />
      <Button
        variant="primary"
        className="mx-auto text-center"
        style={({ width: "2rem" }, { height: "2rem" })}
        type="button"
        onClick={MovieComment}
      >
        +
      </Button>
    </Card>
  </>
);

export default SingleMovie;
