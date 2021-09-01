import { Container, Row } from "react-bootstrap";
import { Component } from "react";
import MovieList from "./MovieList";
import Loading from "./Loading";
import { Search } from "react-bootstrap-icons";

class TrendingNow extends Component {
  state = {
    movies: [], //movies will come here
    isLoading: true,
  };
  

  componentDidMount() {
    this.fetchMovies();
  }


  fetchMovies  = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=55818844&s="${this.props.title.toLowerCase()}"&type=movie&page=1`   
        
        
      );
      if (response.ok) {
        const movies = await response.json();
        this.setState({ movies: movies } ,() =>
        console.log(this.state.movies.search)
        )
      } 
    
      else {
        alert("Some error happened. No movies fetched");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };


  render() {
    return (
      <>

        <Container className="container-fluid ">
        <h2 className = "text-white">{this.props.title}</h2>
        

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
