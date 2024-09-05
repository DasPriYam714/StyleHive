

import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';
import Product from './components/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <>
      <div>
        <ToastContainer/>
        <Navbar/>
        

        <Routes>
        <Route path={'/products'} element={<Collection/>}/>
      
        <Route path={'/product/:productId'} element={<Product/>}/>
      {/* <Route path={'/products'} element={<Collection/>}/> */}
     
    
  
  
      </Routes>
        
      </div>
      
    </>
  )
}

export default App
