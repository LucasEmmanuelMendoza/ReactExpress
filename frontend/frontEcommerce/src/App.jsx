import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/items/ItemListContainer'
import { Error } from './components/Error'
import LoginRegister from './components/LoginRegister'
import Cart from './components/Cart'
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile'
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/login' element={<LoginRegister/>} />
            <Route path='/register' element={<LoginRegister/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/favorites' element ={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      <Footer/>
      </BrowserRouter>
    )
}

export default App