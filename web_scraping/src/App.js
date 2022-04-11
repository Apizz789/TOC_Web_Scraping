import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Searchbox';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Searchbox/>
        <Content/>
    </div>
  );
}

export default App;
