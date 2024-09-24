import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Button variant="primary">Watch More</Button>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
    )
}