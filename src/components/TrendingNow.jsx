import {Container, Row, Col} from 'react-bootstrap'
import {Component} from 'react'
import MovieList from './MovieList'

class TrendingNow extends Component{
    state = {
        movies: []//movies will come here
    }

    getMovies = async() => {
        try {
            const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=55818844&s=harry%20potter",{
                method: "GET",

            })
            if (response.ok){
                const movies = await response.json()
                this.setState({movies})
                console.log(this.state.movies.Search)
            } else{
                alert("Some error happened. No movies fetched")
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount=async() =>{
        await this.getMovies()
    }

    render(){
        return (
            <>
            <h5 className="text-left ml-5">Trending Now - Harry Potter</h5>
            <Container className="container-fluid">
                <Row>
                    <MovieList movies = {this.state.movies.Search}/>
                </Row>
            </Container>
            </>
        )
    }
}

export default TrendingNow

