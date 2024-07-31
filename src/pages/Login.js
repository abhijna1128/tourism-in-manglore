import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mangmap from '../image/map2-min.jpg';
import Swal from 'sweetalert2';
import { PulseLoader } from 'react-spinners';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Logging in with:', { username, password });
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('isLoggedIn', 'true');
        navigate('/Roombook');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Logged in successfully',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Please enter a valid username and password!',
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Server error, please try again later!',
      });
    }
  };

  const handleRegister = async () => {
    console.log('Registering with:', { username, password });
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Registered successfully. You can now log in.',
        });
        setIsRegistering(false);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Error registering, please try again!',
        });
      }
    } catch (error) {
      console.error('Error registering:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Server error, please try again later!',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
        <>
          <div className="container-fluid loginbackground">
            <div className="row loginstyle">
              <div className="col-md-6 ">
                <img src={mangmap} className="login-image" alt="Login" />
              </div>
              <div className="col-md-6 ">
                <h1>Tourism Management System</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-labell">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-controll"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-labell">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-controll"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btnstyle">
                    {isRegistering ? 'Register' : 'Login'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setIsRegistering(!isRegistering)}
                  >
                    {isRegistering ? 'Switch to Login' : 'Switch to Register'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
