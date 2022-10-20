import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import ThemeContext from './Context/ThemeContext';
import AuthContext from './Context/AuthContext';
import { store } from './store';

import App from './App';
import SomeWentWrong from './Pages/SomeWentWrong';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContext>
        <ThemeContext>
          <BrowserRouter>
            <Routes>
              <Route path='/*' element={<App />} errorElement={<SomeWentWrong />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext>
      </AuthContext>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals