import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {

  return (

  <Router>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/dashboard' element={<Dashboard/>}></Route>
  <Route exact path='/login' element={<Login/>}></Route>
<Route exact path='/register' element={<Register/>}></Route>
    </Routes>
  
  </Router> 
  );
}

export default App;
