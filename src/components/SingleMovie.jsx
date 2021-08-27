import {Card} from 'react-bootstrap'


const SingleMovie = ({movie}) =>(
        <Card style={{ width: '18rem'}}>
        <Card.Img src={movie.Poster} />
        </Card>
)
   

export default SingleMovie





