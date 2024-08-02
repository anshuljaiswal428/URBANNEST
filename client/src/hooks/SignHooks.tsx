import { useState } from 'react';

const useSignUpFormCustomer = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [aadharNumber, setAadharNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [gender, setGender] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');
  const [officeAddress, setOfficeAddress] = useState<string>('');
  const [caste, setCaste] = useState<string>('');
  const [religion, setReligion] = useState<string>('');
  const [maritalStatus, setMaritalStatus] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePicture(e.target.files[0]);
    }
  };

  return {
    name, setName,
    email, setEmail,
    dob, setDob,
    phoneNumber, setPhoneNumber,
    aadharNumber, setAadharNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    nationality, setNationality,
    profilePicture, setProfilePicture,
    gender, setGender,
    username, setUsername,
    occupation, setOccupation,
    officeAddress, setOfficeAddress,
    caste, setCaste,
    religion, setReligion,
    maritalStatus, setMaritalStatus,
    handleFileChange,
  };
};

export default useSignUpFormCustomer;
