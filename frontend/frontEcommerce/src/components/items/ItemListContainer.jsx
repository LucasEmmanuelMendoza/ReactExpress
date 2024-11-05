import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { id } = useParams();//id category

    useEffect(() =>{
        fetch('http://localhost:8080/products').then(
            response => response.json()
        ).then(
            data => {
                setItems(data)
            }
        )
    }, [id]);

    return(
        <div>
            { !items.length ? (
                <h1>
                    Loading...
                </h1>
                ):(
                    <Container>
                        <ItemList items={items}/>
                    </Container>
                )
            }
        </div>
    )
}