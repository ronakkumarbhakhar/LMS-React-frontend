import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { VscEyeClosed, VscEye } from "react-icons/vsc"
import InputField from '../../components/subComponents/InputField'
import signin from "../../images/signin-image.jpg"
import "../../css/loginOrSignup.css"
import { UserContext } from "../../App"
import { SERVER_URL } from '../../constants'


const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const loginUser = async (e) => {
        e.preventDefault();

        const config = { withCredentials: false }
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post(`${SERVER_URL}/user/login`, { email, password }, config)

            .then((res) => {
                console.log(res);
                dispatch({ type: "USER", payload: true });
                console.log("Login Successfull");

                navigate('/');
            })
            .catch(err => {
                console.log(err);
                window.alert("Invalid Credentials");
                console.log("Invalid Credentials");
            });
    }

    return (
        <>
            <div className="container-main">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={signin} alt="img" /></figure>
                            <div className='below-image'>
                                <span className="new-here">New here?</span>
                                <NavLink to="/register" className="signup-image-link">Create an account</NavLink>
                            </div>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            <form method="POST" className="register-form" id="login-form">

                                <InputField htmlFor="your_name" className="zmdi zmdi-account material-icons-name" type="text" name="your_email" id="your_email"
                                    value={email} onChange={event => setEmail(event.target.value)} placeholder="Your Email" />

                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type={showPassword ? "text" : "password"} name="password" id="pass" autoComplete='off'
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                        placeholder="Password" />
                                    <div className='eye-div' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEye style={{ color: "blue" }} /> : <VscEyeClosed />}</div>
                                </div>
                                {(password && email) ? (
                                    <div className="form-group form-button">
                                        <input method="" type="submit" name="signin" id="signin" className="form-submit"
                                            value="Log in" onClick={loginUser} />
                                    </div>
                                ) : (<div className="form-group form-not-button">
                                    <input method="" type="submit" name="signin" id="signin" className="form-not-submit"
                                        value="Fill the form" onClick={loginUser} />
                                </div>)}

                            </form>
                            <div className="forgot-password">
                                <div className='below-image'>
                                    <span className="new-here">Forgot password?</span>
                                    <NavLink to="/forgotPassword" className="signup-image-link">Need help</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
