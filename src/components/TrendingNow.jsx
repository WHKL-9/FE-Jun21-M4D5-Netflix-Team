import { Container, Row } from "react-bootstrap";
import { Component } from "react";
import MovieList from "./MovieList";
import Loading from "./Loading";

class TrendingNow extends Component {
  state = {
    movies: [], //movies will come here
    isLoading: true,
  };

  getMovies = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=55818844&s=harry%20potter",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const movies = await response.json();
        this.setState({ movies: movies.Search, isLoading: false });
      } else {
        alert("Some error happened. No movies fetched");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        <Container className="container-fluid ">
        <h5 className="text-left">Trending Now - Harry Potter</h5>

          <Row>
            {this.state.isLoading && <Loading />}
            {!this.state.isLoading &&
              this.state.movies.map((movie) => <MovieList movie={movie} />)}
          </Row>
        </Container>
      </>
    );
  }
}

export default TrendingNow;
