import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/forgotPassword.css"
import axios from 'axios';
import { SERVER_URL } from '../constants';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const handleSubmit = async () => {

        localStorage.setItem("emailId", JSON.stringify(email));

        navigate("/resetPassword");

        axios.post(`${SERVER_URL}/forgotPassword`, { email })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                window.alert("Invalid Email");
            })
    }

    return (
        <>
            <div className="container-main">
                <div className="forgotPassword-container">
                    <h1>Forgot Password</h1>
                    <form className="forgotPassword-form" method='POST'>
                        <div className="forgotPassword-input-field">
                            <span className='username-text'>Email ID</span>
                            <label htmlFor="otp"></label>
                            <input type="text" name="otp" id="otp" autoComplete='given-name'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter Email ID" />
                        </div>
                        <button
                            onClick={handleSubmit}
                            className='forgotPassword-btn' type='submit'>Forgot Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
