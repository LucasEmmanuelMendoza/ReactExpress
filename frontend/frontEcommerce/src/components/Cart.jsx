import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
function CartView(){
    return(
        <>cart</>
    )
}

function FavoritesView(){
    return(
        <>
            <div className='cardsContainer'>
            <Card className='cartCard'>
                1
                <Card.Img className='cardimg' src="https://www.tiendabike.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BINSTRADA1.5D_800.jpg"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>
            
            <Card className='cartCard'>
                2
                <Card.Img className='cardimg' src="https://acdn.mitiendanube.com/stores/053/255/products/123-2b136f19bdbd7e88a117123522655352-1024-1024.webp"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className='cartCard'>
                3
                <Card.Img className='cardimg' src="https://www.tiendabike.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BINSTRADA1.5D_800.jpg"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className='cartCard'>
                4
                <Card.Img className='cardimg' src="https://www.tiendabike.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BINSTRADA1.5D_800.jpg"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className='cartCard'>
                4
                <Card.Img className='cardimg' src="https://www.tiendabike.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BINSTRADA1.5D_800.jpg"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>            <Card className='cartCard'>
                4
                <Card.Img className='cardimg' src="https://www.tiendabike.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BINSTRADA1.5D_800.jpg"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>            <Card className='cartCard'>
                4
                <Card.Img className='cardimg' src="https://www.tiendabike.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BINSTRADA1.5D_800.jpg"/>
                <Card.Body>
                    <div style={{display:'flex', gap:'1rem', flexDirection:'column'}}>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <Button variant="primary">Ver Más</Button>
                        <Button variant="danger">Eliminar Del Favoritos</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
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