import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogIn from './pages/login/LogIn';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
