import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/items/ItemListContainer'
import { Error } from './components/Error'
import LoginRegister from './components/LoginRegister'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/login' element={<LoginRegister/>} />
            <Route path='/register' element={<LoginRegister/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/favorites' element ={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
    )
}

export default App