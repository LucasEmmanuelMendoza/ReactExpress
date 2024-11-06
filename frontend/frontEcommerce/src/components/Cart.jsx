import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function CartView(){
    return(
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>id</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </Table>
    )
}

function FavoritesView(){
    return(
        <>

        </>
    )
}

function Cart(){
    const location = useLocation()
    const navigate = useNavigate();

    const isCart = location.pathname === '/cart';

    return(
        <>
            <button onClick={()=>{navigate('/favorites')}}>Favorites</button>
            <button onClick={()=>{navigate('/cart')}}>Cart</button>

            {isCart ? <CartView/> : <FavoritesView/>}
        </>
    )
}

export default Cart;