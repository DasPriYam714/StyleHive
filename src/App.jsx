

import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';
import Product from './components/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import CartTotal from './components/CartTotal';
import PlaceOrder from './pages/PlaceOrder';

function App() {
  

  return (
    <>
      <div>
        <ToastContainer/>
        <Navbar/>
        

        <Routes>
        <Route path={'/products'} element={<Collection/>}/>
      
        <Route path={'/product/:productId'} element={<Product/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/carttotal'} element={<CartTotal/>}/>
      <Route path={'/placeorder'} element={<PlaceOrder/>}/>
     
    
  
  
      </Routes>
        
      </div>
      
    </>
  )
}

export default App
