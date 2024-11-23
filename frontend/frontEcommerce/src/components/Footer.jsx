import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <div style={{height:'8rem'}} className='footer d-flex justify-content-evenly align-items-center'>
            <div>
                <h3>Marca - All rights reserved (R)</h3>
            </div>

            <div>
                Redes Sociales:
                <Link to='http://www.x.com'>Twitter</Link>
                <Link to='http://www.instagram.com'>Instagram</Link>
            </div>
            
       </div>
    )
}