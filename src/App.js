import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import LogIn from './pages/login/LogIn';
import Home from './pages/home/Home';
import MealsFinder from './pages/mealsFinder/MealsFinder';
import AuthContext from './context/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {!authCtx.isLoggedIn && <Route path='/login' element={<LogIn />} />}
        {authCtx.isLoggedIn && <Route path='/home' element={<Home />} />}
        {authCtx.isLoggedIn && (
          <Route path='/mealFinder' element={<MealsFinder />} />
        )}
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </Router>
  );
}

export default App;
