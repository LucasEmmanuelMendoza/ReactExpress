import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
    return(
    <Card style={{width: '10rem'}}>
      <Card.Img variant="top" src={item.pictureUrl} style={{width: '10rem', height: '15rem'}} />
      <Card.Body className=''>
        <Card.Title>{item.title}</Card.Title>
        <Button variant="primary">Watch More</Button>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
    )
}