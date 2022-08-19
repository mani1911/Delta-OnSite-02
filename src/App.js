import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home'
import Login from './components/auth/login';
import Register from './components/auth/register';
import Edit from './components/home/edit';
import Add from './components/home/add';
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
          <Route path = "/add" element = {<Add/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
