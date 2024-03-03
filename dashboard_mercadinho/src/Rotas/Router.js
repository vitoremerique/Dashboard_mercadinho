import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Products from '../Pages/Products';
import Sales from '../Pages/Sales';
import RegisterProduct from '../Pages/Register-product';
import Sighin from '../Pages/Sighin';

const Router = () => {
  return (
    
    <Routes>
     
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/sighin" element={<Sighin/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/registerProduct" element={<RegisterProduct/>} />
    
    </Routes>
  );
};

export default Router;
