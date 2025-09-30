import './App.css'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Products from './pages/Products'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile'


function App() {

  return (
    <>
      <h1>Hello Everyone</h1>

      <BrowserRouter>

          <Navigation/>

          <Routes>

            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/profile' element={<Profile/>}/>

          </Routes>
      
      </BrowserRouter>

      
    
      
    </>
  )
}

export default App
