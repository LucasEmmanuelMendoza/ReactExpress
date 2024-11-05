import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/items/ItemListContainer'
import { Error } from './components/Error'
import LoginRegister from './components/LoginRegister'
import Cart from './components/Cart'

function App() {
  return (
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
  )
}

export default App