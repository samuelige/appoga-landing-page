import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './container/About/About';
import Header from './container/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      
    </div>
  );
}

export default App;
