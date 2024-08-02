import { Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import Home from "./_root/pages/Home/Home";
import About from "./_root/pages/About/About";
import ContactUs from "./_root/pages/ContactUs/ContactUs";
import Error from "./components/Error/Error";
import FindPg from "./_root/pages/FindPg/FindPg";
import Howitworks from "./_root/pages/HowItWorksGuide/Howitworks";
import TwoBox from "./components/TwoBox/TwoBox";
import SignUpOwner from "./_auth/forms/Signup/SignUpOwner";
import './App.css';
import SignUpCustomer from "./_auth/forms/Signup/SignUpCustomer";
import SignIn from "./_auth/forms/SignIn/SignIn";

function App() {
  return (
    <div className="app-div1">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Howitworks" element={<Howitworks/>}/>
          <Route path="/Findpg" element={<FindPg/>}/>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth" element={<TwoBox/>}/>
          <Route path="/auth/Sign-up-customer" element={<SignUpCustomer/>}/>
          <Route path="/auth/Sign-up-owner" element={<SignUpOwner/>}/>
          <Route path="/auth/Sign-in" element={<SignIn/>}/>
        </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App