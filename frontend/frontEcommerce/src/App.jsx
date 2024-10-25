import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/items/ItemListContainer'
import { Error } from './components/items/ItemListContainer'
import { LoginRegister } from './components/items/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/login' element={<LoginRegister/>} />
          <Route path='/register' element={<LoginRegister/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App