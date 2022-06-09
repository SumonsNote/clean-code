import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './components/Routes/publicRoute';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component></Component>}></Route>
            ))
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
