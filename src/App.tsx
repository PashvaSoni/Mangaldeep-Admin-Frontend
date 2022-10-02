import React from 'react';
import {Routes,Route} from 'react-router-dom'

import './App.css';

import Layout from './Components/Layout';
import PageNotFound from './Pages/PageNotFound';
import { Login } from './Pages/Login';
import RequireAuth from './Hooks/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>} >
          {/* Un-Protected Routes */}
          <Route path='login' element={<Login/>}/>

          {/* Protected Routes */}
          <Route element={<RequireAuth/>}>
            <Route path='product' element={<p>Product</p>}/>
            <Route path='home' element={<p>Home</p>}/>
          </Route>

          {/* No route Found */}
          <Route path='*' element={<PageNotFound/>}/>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
