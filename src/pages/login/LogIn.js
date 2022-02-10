import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import classes from './logIn.module.css';
import image from '../../assets/loginImg.jpg';
import AuthContext from '../../store/auth-context';
import axios from 'axios';

const LogIn = () => {
  const navigate = useNavigate();

  const emailInputRef = useRef();

  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let data = {
      email: enteredEmail,
      password: enteredPassword,
    };
    let url = 'http://challenge-react.alkemy.org/';

    axios
      .post(url, data)
      .then((res) => {
        setIsLoading(false);
        authCtx.login(res.data.token);
        navigate('/Home');
      })
      .catch((error) => {
        setIsLoading(false);

        let errorMessage = 'Authentication failed!';
        if (error.response) {
          errorMessage = error.response.data;
          Swal.fire({
            title: 'Authentication failed!!',
            text: `${errorMessage.error}`,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });
  };

  return (
    <div className='container w-50 mt-5 rounded shadow'>
      <div className='row align-items-stretch'>
        <div className='col d-none d-lg-block col-md-6 col-lg-6 col-xl-6 px-0'>
          <img src={image} alt='logIn' className={classes.bg} />
        </div>
        <div className='col p-5 bg-white rounded-end'>
          <h2 className='fw-bold text-center py-5'>Welcome</h2>
          <form onSubmit={submitHandler}>
            <div className='mb-4'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email'
                required
                ref={emailInputRef}
              />
            </div>
            <div className='mb-4'>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                required
                ref={passwordInputRef}
              />
            </div>
            <div className='d-grid'>
              {!isLoading && (
                <button type='submit' className='btn btn-primary'>
                  Log In
                </button>
              )}
              {isLoading && (
                <button className='btn btn-primary' type='button' disabled>
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                  Sending...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
