
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


import {Outlet} from "react-router-dom"

function App() {
  return (
    <div style={styles.container}>
      
    <Header />
    
    <Sidebar />
    
    <main>
      <Outlet />
    </main>
   
   </div>
  );
}

export default App;

const styles = {
  container:{
    flex: 1,
    padding: '0px',
    margin: '0px',
    fontSize: '18px',
    height: '1280',
    width: '720',
   
    
  },

  sidebar:{
    
   
    
    

  }
  

 
  
}