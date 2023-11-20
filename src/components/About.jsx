import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "../css/about.css"
import aboutPic from "../images/about.png"
import UpdateProfile from "./UpdateProfile"
import { SERVER_URL } from '../constants'

const About = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const config = { withCredentials: true }
    axios.get(`${SERVER_URL}/getData`, config)
      .then((result) => {
        setUserData(result.data);
        console.log(result.data);

      }).catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);

  return (
    <>
      <div className="container-main">
        {/* <div className='form_background'> */}
        <div className="emp-profile">
          <h2>Student Profile</h2>

          <form method="GET">
            <div className="row ">

              <div className="profile-photo mt-1 mb-3">
                <img src={userData?.image ? userData?.image : aboutPic} className="pphoto" alt="profile photo" />

                <UpdateProfile />

              </div>
            </div>
            <div className='about-details'>
              <div>Student Name</div>
              <div>{userData?.name}</div>
              <div>Student Email</div>
              <div>{userData?.email}</div>
              <div>Registration No.</div>
              <div>{userData?.registration}</div>
              <div>Room No.</div>
              <div>{userData?.room}</div>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default About
