import * as React from 'react';

import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div style={styles.container}>
      

        
        <div ><Link to="/"> <button >Dashboard</button> </Link></div>
        <div><Link to="/sales"> <button >Vendas</button> </Link></div>
        <div><Link to="/products"> <button >Produtos</button></Link></div>
        <div><Link to="/registerProduct"><button >Cadastrar</button></Link></div>
       
      
      
   </div>
    
  );
};

export default Sidebar;

const styles = {
  container:{
   
   
    backgroundColor: '#FFF',
    
    width: '100px',
    height:'100%',
    textAlign: 'center',
    backgroundColor: '#d9d9d2a2',
    
  
  },
  corpo:{
    
    
    
    
  },
  margemBotoes:{
    
  }
 
}