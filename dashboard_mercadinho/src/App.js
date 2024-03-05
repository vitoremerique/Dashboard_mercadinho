
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


import {Outlet} from "react-router-dom"

function App() {
  return (
    <div>
    <Header/>
    <Sidebar />
    
    <main>
      <Outlet/>
    </main>
  </div>
  );
}

export default App;
