import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../css/verifyOtp.css"
import axios from 'axios';
import { SERVER_URL } from '../constants';

const ResetPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const handleSubmit = async () => {

        axios.post(`${SERVER_URL}/verifyOtp`, { otp, email })
            .then((res) => {
                console.log(res);

                navigate("/changePassword");

            })
            .catch((err) => {
                console.log(err);
                window.alert("Invalid OTP");
            })
    }

    const handleResend = async () => {
        axios.post(`${SERVER_URL}/reSendOtp`, { email })
            .then((res) => {
                console.log(res);
                window.alert("OTP sent successfully");

            })
            .catch((err) => {
                console.log(err);
                window.alert("Error sending OTP");
            })
    }

    useEffect(() => {
        console.log("use effect");
        setEmail(JSON.parse(localStorage.getItem('emailId')));
    }, []);

    return (
        <>
            <div className="container-main">
                <div className="verifyOtp-container">
                    <div className='shield-icon'>
                        <i className="bx bxs-check-shield"></i>
                    </div>
                    <div className='verifyOtp-display-text'>
                        <h4>Enter 4-Digit OTP Code</h4>
                        <h4>sent to your email</h4>
                        <h5>{email}</h5>
                    </div>
                    <form className="verifyOtp-form" action="javascript:void(0);" method='POST'>
                        <div className="verifyOtp-input-field">
                            <label htmlFor="otp"></label>
                            <input type="text" name="otp" id="otp" autoComplete='given-name'
                                value={otp}
                                onChange={(event) => setOtp(event.target.value)}
                                placeholder="Enter OTP" />
                        </div>
                        <button onClick={handleSubmit} className='verifyOtp-btn' type='submit'>Verify OTP</button>
                    </form>
                    <div className='verifyOtp-display-text'>
                        <span className="new-here">Didn't receive the OTP?</span>
                        <NavLink to="/resetPassword" onClick={handleResend} className="signup-image-link">Click here to resend</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
