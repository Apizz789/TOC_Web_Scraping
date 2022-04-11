import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Searchbox';
import Card from './components/Card';

function App() {
  const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <div className="App">
        <Searchbox/>
        <Card img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png"} name={"hello my name is brabrabrabrabra"}
        Clickfunction={shoot}></Card>
    </div>
  );
}

export default App;
