import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '/Users/anshuljaiswal/Development/UrbanNest/client/src/firebase';
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
  aadharPhotofront: File | null;
  aadharPhotoback: File | null;
  propertyName: string;
  propertyAddress: string;
  numRooms: string;
  accommodationTypes: string;
  facilities: string;
  rent: string;
  securityDeposit: string;
  timings: string;
  specialRequirements: string;
}

const SignUpOwner: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    aadharNumber: '',
    aadharPhotofront: null,
    aadharPhotoback: null,
    gender: 'male',
    username: '',
    password: '',
    confirmPassword: '',
    nationality: '',
    occupation: '',
    officeAddress: '',
    profilePicture: null,
    caste: '',
    religion: '',
    maritalStatus: 'single',
    propertyName: '',
    propertyAddress: '',
    numRooms: '',
    accommodationTypes: '',
    facilities: '',
    rent: '',
    securityDeposit: '',
    timings: '',
    specialRequirements: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : null,
    }));
  };

  const uploadFile = async (file: File, path: string): Promise<string> => {
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      const aadharPhotofrontURL = formData.aadharPhotofront
        ? await uploadFile(formData.aadharPhotofront, `aadharPhotos/${user.uid}/front.jpg`)
        : null;

      const aadharPhotobackURL = formData.aadharPhotoback
        ? await uploadFile(formData.aadharPhotoback, `aadharPhotos/${user.uid}/back.jpg`)
        : null;

      const profilePictureURL = formData.profilePicture
        ? await uploadFile(formData.profilePicture, `profilePictures/${user.uid}.jpg`)
        : null;

      await setDoc(doc(db, 'owners', user.uid), {
        fullName: formData.fullName,
        email: formData.email,
        dob: formData.dob,
        phoneNumber: formData.phoneNumber,
        aadharNumber: formData.aadharNumber,
        aadharPhotofront: aadharPhotofrontURL,
        aadharPhotoback: aadharPhotobackURL,
        gender: formData.gender,
        username: formData.username,
        nationality: formData.nationality,
        occupation: formData.occupation,
        officeAddress: formData.officeAddress,
        profilePicture: profilePictureURL,
        caste: formData.caste,
        religion: formData.religion,
        maritalStatus: formData.maritalStatus,
        propertyName: formData.propertyName,
        propertyAddress: formData.propertyAddress,
        numRooms: formData.numRooms,
        accommodationTypes: formData.accommodationTypes,
        facilities: formData.facilities,
        rent: formData.rent,
        securityDeposit: formData.securityDeposit,
        timings: formData.timings,
        specialRequirements: formData.specialRequirements,
      });

      alert("User registered successfully!");
      navigate("/auth/Sign-in");
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("Error registering user");
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Number</label>
          <input type="text" id="aadharNumber" name="aadharNumber" placeholder="Aadhar Number" value={formData.aadharNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="aadharPhotofront">Aadhar Front Photo</label>
          <input type="file" id="aadharPhotofront" name="aadharPhotofront" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="aadharPhotoback">Aadhar Rear Photo</label>
          <input type="file" id="aadharPhotoback" name="aadharPhotoback" onChange={handleFileChange} />
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
          <input type="text" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <input type="text" id="nationality" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input type="text" id="occupation" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="officeAddress">Office Address</label>
          <input type="text" id="officeAddress" name="officeAddress" placeholder="Office Address" value={formData.officeAddress} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" name="profilePicture" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="caste">Caste</label>
          <input type="text" id="caste" name="caste" placeholder="Caste" value={formData.caste} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="religion">Religion</label>
          <input type="text" id="religion" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="widow">Widow</option>
            <option value="divorce">Divorce</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="propertyName">Property Name</label>
          <input type="text" id="propertyName" name="propertyName" placeholder="Property Name" value={formData.propertyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="propertyAddress">Property Address</label>
          <input type="text" id="propertyAddress" name="propertyAddress" placeholder="Property Address" value={formData.propertyAddress} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="numRooms">Number of Rooms Available</label>
          <input type="number" id="numRooms" name="numRooms" placeholder="Number of Rooms" value={formData.numRooms} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="accommodationTypes">Types of Accommodation</label>
          <input type="text" id="accommodationTypes" name="accommodationTypes" placeholder="Types of Accommodation" value={formData.accommodationTypes} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="facilities">Facilities Provided</label>
          <input type="text" id="facilities" name="facilities" placeholder="Facilities Provided" value={formData.facilities} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="rent">Rent Per Month</label>
          <input type="number" id="rent" name="rent" placeholder="Rent Per Month" value={formData.rent} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="securityDeposit">Security Deposit</label>
          <input type="number" id="securityDeposit" name="securityDeposit" placeholder="Security Deposit" value={formData.securityDeposit} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="timings">Timings</label>
          <input type="text" id="timings" name="timings" placeholder="Timings" value={formData.timings} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="specialRequirements">Special Requirements or Notes</label>
          <textarea id="specialRequirements" name="specialRequirements" placeholder="Special Requirements or Notes" value={formData.specialRequirements} onChange={handleChange}></textarea>
        </div>
        <button className="signupownerbutton" type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/auth/Sign-in" className="sign-link">Log in</Link>
      </p>
    </div>
  );
};

export default SignUpOwner;
