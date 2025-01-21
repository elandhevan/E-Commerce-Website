import React, { useState } from 'react';
import './Login.css';
import Popular from './Popular';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

// loginSignUp
const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const navigate = useNavigate()

  const addUser = async (e) => {
    e.preventDefault();


    const response = await fetch('https://backend-6xns.onrender.com/add-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Password: password
      })
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 'success') {

      navigate('/Signup')


    } else {
      console.error('Sign-in failed');
    }
  };
  // signin user
  // const signinUser = () => {

  const signInUser = async (e) => {
    e.preventDefault();

    const response = await fetch('https://backend-6xns.onrender.com/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    });

    const data = await response.json();
    console.log(data);

    if (data.status === 'success') {

      navigate('/Signin')

    } else {

      console.error('Sign-in failed');
    }
  };


  // }

  return (
    <><Navbar /><div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={addUser}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>

          <span>or use your email and password</span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="#">Forget Your Password?</a>
          <button type="button" onClick={signInUser}>Sign In</button>

        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={() => document.getElementById('container').classList.remove("active")}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="register" onClick={() => document.getElementById('container').classList.add("active")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default LoginSignup;
