import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/items/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
