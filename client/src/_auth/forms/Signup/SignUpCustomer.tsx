import React, { useState, ChangeEvent, FormEvent } from 'react';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '/src/css/Sign.css';

interface FormData {
  fullName: string;
  email: string;
  dob: string;
  phoneNumber: string;
  aadharNumber: string;
  gender: string;
  username: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  officeAddress: string;
  nationality: string;
  caste: string;
  religion: string;
  maritalStatus: string;
  profilePicture: File | null;
}

const SignUpCustomer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    aadharNumber: '',
    gender: 'male',
    username: '',
    password: '',
    confirmPassword: '',
    occupation: '',
    officeAddress: '',
    nationality: '',
    caste: '',
    religion: '',
    maritalStatus: 'single',
    profilePicture: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the file in the state, but do not set the value on the input element.
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'customers', user.uid), {
        fullName: formData.fullName,
        email: formData.email,
        dob: formData.dob,
        phoneNumber: formData.phoneNumber,
        aadharNumber: formData.aadharNumber,
        gender: formData.gender,
        username: formData.username,
        occupation: formData.occupation,
        officeAddress: formData.officeAddress,
        nationality: formData.nationality,
        caste: formData.caste,
        religion: formData.religion,
        maritalStatus: formData.maritalStatus,
        profilePicture: formData.profilePicture ? formData.profilePicture.name : null,
      });

      alert("User registered successfully!");
    } catch (error: any) {
      // Handle specific Firebase auth errors.
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("This email is already in use. Please use a different email or log in.");
      } else {
        alert(`Error registering user: ${error.message}`);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="logo-container-signup">
        <img src="/public/assets/SignLogo.png" alt="Logo" className="signupown" />
        <label>Where Comfort Finds Its Address</label>
      </div>
      <span className="signupownerspan">Create a new account</span>
      <p className="textofacc">To use URBAN NEST, please enter your details</p>
      <form method='POST' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Number</label>
          <input type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Aadhar Number" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
        </div>
        <div className="form-group">
          <label htmlFor="officeAddress">Office Address</label>
          <input type="text" id="officeAddress" name="officeAddress" value={formData.officeAddress} onChange={handleChange} placeholder="Office Address" />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" />
        </div>
        <div className="form-group">
          <label htmlFor="caste">Caste</label>
          <input type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} placeholder="Caste" />
        </div>
        <div className="form-group">
          <label htmlFor="religion">Religion</label>
          <input type="text" id="religion" name="religion" value={formData.religion} onChange={handleChange} placeholder="Religion" />
        </div>
        <div className="form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" name="profilePicture" accept="image/*" onChange={handleFileChange} />
        </div>
        <button className="signupownerbutton" type="submit">Sign Up</button>
        <div className="login-option">
          <p>Already have an account? <Link to='/signin'>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpCustomer;
