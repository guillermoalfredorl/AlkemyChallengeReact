import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../context/auth-context';

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const logOutHandler = () => {
    authCtx.logout();
    navigate('/login');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-expand-md navbar-dark fw-bold d-flex justify-content-between bg-transparent px-5'>
      <div className='navbar-nav'>
        <a className='navbar-brand ' href='/home'>
          Logo
        </a>
        <a className='nav-item nav-link d-none d-md-block' href='/home'>
          Home
        </a>
        <a className='nav-item nav-link' href='/mealFinder'>
          Search Meal
        </a>
      </div>
      <div className='navbar-nav'>
        <h6 className='nav-item nav-link'>Ready in time</h6>
        <h6 className='nav-item nav-link'>HealthScore</h6>
        <h6 className='nav-item nav-link'>Price</h6>
        <button
          type='button'
          className='btn btn-danger'
          onClick={logOutHandler}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
