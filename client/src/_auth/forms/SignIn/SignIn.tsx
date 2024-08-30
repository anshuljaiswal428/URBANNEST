import React, { useState } from 'react';
import '/src/css/Sign.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/Users/anshuljaiswal/Development/UrbanNest/client/src/firebase';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Successfull!",formData.email, formData.password);
      navigate('/'); 
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        case 'auth/user-disabled':
          setError('This user has been disabled.');
          break;
        case 'auth/user-not-found':
          setError('User not found.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        default:
          setError('Error registering user: ' + error.message);
          break;
      }
    }
  };

  return (
    <div className="form-container">
      <div className="logo-container-signup">
        <img src="/public/assets/SignLogo.png" alt="Logo" className='signupown'/>
        <label>Where Comfort Finds Its Address</label>
      </div>
      <span className='signupownerspan'>Log In</span>
      <p className="textofacc">
        To use URBAN NEST, please enter your details
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Email' 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder='Password' 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <button className='signupownerbutton' type="submit">Sign In</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        Don't have an account?
        <Link to="/auth" className='sign-link'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
