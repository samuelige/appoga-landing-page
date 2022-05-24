import './App.css';
import AboutSolutions from './components/About_Solutions/About_Solutions';
import Navbar from './components/navbar/Navbar';
import Header from './container/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutSolutions/>
      
    </div>
  );
}

export default App;
