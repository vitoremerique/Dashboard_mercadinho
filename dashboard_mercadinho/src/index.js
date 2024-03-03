import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Rotas/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
 <div>
    <Header/>
    <Sidebar />
    
    <main>
      <Router/>
    </main>
  </div>
  </BrowserRouter>


);


