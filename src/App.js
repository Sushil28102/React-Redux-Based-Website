import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;