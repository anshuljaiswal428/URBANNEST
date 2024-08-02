import React from 'react';
import '/src/css/Sign.css';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="form-container">
      <div className="logo-container-signup" >
        <img src="/public/assets/SignLogo.png" alt="Logo" className='signupown'/>
        <label>Where Comfort Finds Its Address</label>
      </div>
      <span className='signupownerspan'>Log In</span>
      <p className="textofacc">
          To use URBAN NEST, please enter your details
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input type="email" id="emailoruser" name="emailoruser" placeholder='Email or Username' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder='Password'/>
        </div>
        <button className='signupownerbutton' type="submit">Sign In</button>
      </form>
      <p>
        Not have an account?
        <Link to="/auth" className='sign-link'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
