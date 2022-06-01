import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePage from './Pages/CreatePage';
import ReadPage from './Pages/ReadPage';
import UpdatePage from './Pages/UpdatePage';

function App() {
  return (
    <div> 
    <BrowserRouter>
        <Routes>
           <Route path='/' element={ <ReadPage key={Date.now()} />}/>
           <Route path='/create' element={<CreatePage key={Date.now()}/>}/>
           <Route path='/update/:id' element={<UpdatePage key={Date.now()}/>}/>
        </Routes>
     </BrowserRouter>
  </div>
  )
}

export default App



