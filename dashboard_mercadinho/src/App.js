
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Router from './Rotas/Router';
function App() {
  return (
    <div>
    <Header/>
    <Sidebar />
    
    <main>
      <Router/>
    </main>
  </div>
  );
}

export default App;
