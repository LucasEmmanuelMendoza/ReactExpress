import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/items/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App