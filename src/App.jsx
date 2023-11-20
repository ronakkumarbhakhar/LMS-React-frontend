import React, { createContext, useReducer } from 'react';
import { Route, Routes, } from "react-router-dom";
import '@material-design-icons/font';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './pages/login/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Complaint from './components/Complaint';
import Register from './pages/register/Register';
import ErrorPage from "./components/ErrorPage"
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ChangePassword from './components/ChangePassword';

import { initialState, reducer } from "./reducer/useReducer";
import VerifyOtp from './components/VerifyOtp';


// Context API
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/complaint' element={<Complaint />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/verifyOtp' element={<VerifyOtp />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
      <Route path='/resetPassword' element={<ResetPassword />} />
      <Route path='/changePassword' element={<ChangePassword />} />

      <Route path='*' element={<ErrorPage />} />

    </Routes>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routing />

      </UserContext.Provider>
    </>
  );
}

export default App;
