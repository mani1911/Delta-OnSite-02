import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home'
import Login from './components/login';
import Register from './components/register';
import Edit from './components/edit';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
          <Route path = "/edit" element = {<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
