import './App.css';
import AboutSolutions from './components/About_Solutions/About_Solutions';
import Navbar from './components/navbar/Navbar';
import Clients from './container/Clients/Clients';
import Header from './container/Header/Header';
import { Products } from './container/Products/Products';
import Projects from './container/Projects/Projects';
import Services from './container/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutSolutions/>
      <Services/>
      <Products/>
      <Clients/>
      <Projects/>
      
    </div>
  );
}

export default App;
