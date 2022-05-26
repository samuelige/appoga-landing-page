import './App.css';
import AboutSolutions from './components/About_Solutions/About_Solutions';
import Navbar from './components/navbar/Navbar';
import Clients from './container/Clients/Clients';
import Header from './container/Header/Header';
import Press from './container/Press/Press';
import { Products } from './container/Products/Products';
import Projects from './container/Projects/Projects';
import Quote from './container/Quote/Quote';
import Services from './container/Services/Services';
import Standout from './container/Standout/Standout';
import Testimonials from './container/Testimonials/Testimonials';

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
      <Testimonials/>
      <Standout/>
      <Press/>
      <Quote/>
      
    </div>
  );
}

export default App;
