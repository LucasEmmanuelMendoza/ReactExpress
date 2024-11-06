import { AddDeleteItem } from './AddDeleteItem.jsx'
import { useContext } from 'react'
import { CartContext } from './context/CartContext.jsx'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const add = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <AddDeleteItem onAdd = {add} itemStock = {item.stock}/>
        </Card>
    )
}