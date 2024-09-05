

import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Collection/>

        <Routes>
      
      
      {/* <Route path={'/products'} element={<Collection/>}/> */}
     
    
  
  
      </Routes>
        
      </div>
      
    </>
  )
}

export default App
