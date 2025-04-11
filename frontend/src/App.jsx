import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chatbot from './Components/Chatbot'

const App = () => {
  return (
   <main>
    <ToastContainer/>
    <Header/>
    <Chatbot/>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
       
    </Routes>
   </main>
  )
}

export default App