import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout';
import PageNotFound from './Pages/PageNotFound';
import { Login } from './Pages/Login';
import RequireAuth from './Hooks/RequireAuth';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

        {/* Un-Protected Routes */}
        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Layout />} >
            <Route index element={<h1>Welcome ...</h1>} />
            <Route path='product' element={<p>Product</p>} />
            <Route path='home' element={<p>Home</p>} />
          </Route>
        </Route>

        {/* No route Found */}
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
