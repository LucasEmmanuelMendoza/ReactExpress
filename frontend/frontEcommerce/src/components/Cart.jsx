import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function FavoritesView(){
    return(
        <>
        </>
    )
}

function CartView(){
    return(
        <>
        </>
    )
}

function Cart(){
    const location = useLocation()
    const navigate = useNavigate();

    const isCart = location.pathname === '/cart';

    const toggleForm = () => {
        navigate(isCart ? '/favorites' : '/cart');
    }

    return(
        <>
            <button onClick={toggleForm}>Favorites</button>
            <button onClick={toggleForm}>Cart</button>

            {isCart ? <CartView/> : <FavoritesView/>}
        </>
    )
}

export default Cart;