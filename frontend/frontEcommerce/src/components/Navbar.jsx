import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const Navbar = () => {
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/products/mockProducts').then(
            response => response.json()
        ).then(
            data => { 
                const categoriesAux = data.map(item => item.category)
                setCategories([...new Set(categoriesAux)])
            }
        )
    }, []);

    return(
        <div>
            <Link to='/'><img src="../images/marvelLogo.jpg" alt="logo de la página" style={{width:"3rem", height:"1.5rem"}}/></Link>
            <ul>
                {categories.map(category => (
                    <li><Link to={`/category/${category}`}>{category}</Link></li>
                ))}
            </ul>
            
            <div>
                <ul>
                    <li><Link to='/'>Productos</Link></li> 
                    <li><Link to='/profile'>Perfil</Link></li> 
                    <li><Link to='/favorites'>Favoritos</Link></li> 
                </ul>
            </div>
            <input type="text" />

            <Link to='/cart'><img src="../images/cartLogo.jpg" alt="logo de carrito" style={{width:'3rem', height:'3rem'}}/></Link>
        </div>
    )
}