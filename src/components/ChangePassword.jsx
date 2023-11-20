import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import "../css/changePassword.css"
import axios from 'axios';
import { SERVER_URL } from '../constants';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const ChangePassword = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleSubmit = async () => {

        if (!password || !cpassword) {
            window.alert("Check whether you entered passwords correctly");
            window.location.reload(true);
        }
        else {
            if (password !== cpassword) {
                window.alert("Passwords didn't match");
                window.location.reload(true);
            } else {
                axios.post(`${SERVER_URL}/changePassword`, { password, cpassword, email })
                    .then((res) => {
                        console.log(res);
                        window.alert("Password Changed Successfully");

                        navigate("/login");

                    })
                    .catch((err) => {
                        console.log(err);
                        window.alert("Invalid OTP");
                    })
            }
        }
    }

    useEffect(() => {
        console.log("use effect");
        setEmail(JSON.parse(localStorage.getItem('emailId')));
    }, []);

    return (
        <>
            <div className="container-main">
                <div className="changePassword-container">
                    <h1>Reset Password</h1>
                    <form className="changePassword-form" action="javascript:void(0);" method='POST'>
                        <div className="changePassword-input-field">
                            <span className='username-text'>Password</span>
                            <div className="password-box">
                                <label htmlFor="pass"></label>
                                <input type={showPassword1 ? "text" : "password"} name="pass" id="pass" autoComplete='off'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Password" />
                                <div className='eye-div' onClick={() => setShowPassword1(!showPassword1)}>{showPassword1 ? <VscEye style={{ color: "blue" }} /> : <VscEyeClosed />}</div>
                            </div>

                        </div>
                        <div className="changePassword-input-field">
                            <span className='username-text'>Confirm Password</span>
                            <div className="password-box">
                                <label htmlFor="cpass"></label>
                                <input type={showPassword2 ? "text" : "password"} name="cpass" id="cpass" autoComplete='off'
                                    value={cpassword}
                                    onChange={(event) => setcpassword(event.target.value)}
                                    placeholder="Confirm Password" />
                                <div className='eye-div' onClick={() => setShowPassword2(!showPassword2)}>{showPassword2 ? <VscEye style={{ color: "blue" }} /> : <VscEyeClosed />}</div>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='changePassword-btn' type='submit'>Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
