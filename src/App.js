import React from 'react';
import './App.css';
import Login from './pages/login';
import OtpReceive from './pages/otpReceive';
import Signup from './pages/signup';
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/otpreceive" element={<OtpReceive/>} />
        </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;