import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Services from './components/pages/Services';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
