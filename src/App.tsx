import './App.css';
import AboutSolutions from './components/About_Solutions/About_Solutions';
import Navbar from './components/navbar/Navbar';
import Header from './container/Header/Header';
import { Products } from './container/Products/Products';
import Services from './container/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutSolutions/>
      <Services/>
      <Products/>
      services
      
    </div>
  );
}

export default App;
