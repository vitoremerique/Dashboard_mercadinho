import * as React from 'react';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import PieChartIcon from '@mui/icons-material/PieChart';

const Sidebar = () => {
  return (
    <div style={styles.container}>
      

        
        <Link to="/" style={styles.Link}><Button variant="contained" startIcon={<PieChartIcon/>}
        sx={{bgcolor: '#CCCCCC', color: 'black', borderRadius: '5px', width: '140px', height: '40px',borderRadius: '20px 20px 20px 20px', justifyContent:'start' }}>Início</Button>
         
        </Link>

        <Link to="/sales" style={styles.Link}>  <Button variant="contained" startIcon={<PieChartIcon/>}
        sx={{bgcolor: '#CCCCCC', color: 'black', borderRadius: '5px', width: '140px', height: '40px',borderRadius: '20px 20px 20px 20px', justifyContent:'start' }}>Vendas</Button> 
        </Link>

        <Link to="/products" style={styles.Link}>  <Button variant="contained" startIcon={<PieChartIcon/>}
        sx={{bgcolor: '#CCCCCC', color: 'black', borderRadius: '5px', width: '140px', height: '40px',borderRadius: '20px 20px 20px 20px' ,justifyContent:'start'}} >Produtos</Button>
        </Link>

        <Link to="/registerProduct" style={styles.Link}> <Button variant="contained" startIcon={<PieChartIcon/>}
         sx={{bgcolor: '#CCCCCC', color: 'black', borderRadius: '5px', width: '140px', height: '40px',borderRadius: '20px 20px 20px 20px',justifyContent:'start' }} >Cadastrar</Button>
         </Link>
       

      
   </div>
    
  );
};

export default Sidebar;

const styles = {
  container:{
   
   flex:1,
   textDecoration: 'none',
   alignItems: 'center',
  
  },
  

  Link:{
    textDecoration: 'none',
    display: 'flex',
    marginRight:'5px',
    marginBottom: '20px',
    width: '160px',
    alignItems:'center',
    color: '#888888',
  
  }
 
}


