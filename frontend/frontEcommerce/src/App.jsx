import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/items/ItemListContainer'
import { Error } from './components/Error'
import LoginRegister from './components/LoginRegister'
import Cart from './components/Cart'
import { Navbar } from './components/Navbar';
import { CartProvider } from './context/CartContext'
import { Profile } from './components/Profile'


function App() {
  return (
    <CartProvider>
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
      </BrowserRouter>
    </CartProvider>
    )
}

export default App