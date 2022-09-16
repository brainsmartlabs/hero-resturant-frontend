import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './component/login/Login.js';
import Restaurant from './component/restaurant/Restaurant.js';
import Navbar from './component/navbar/Navbar.js';

function App() {
  return (
    <Restaurant />
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path='/' element={<Login />} />
    //     <Route exact path='/restaurant' element={<Restaurant />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

