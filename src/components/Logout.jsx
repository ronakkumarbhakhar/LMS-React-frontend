import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../App"

const Logout = () => {

  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "USER", payload: false });
    navigate("/login");
  })

  return (
    <>
      <h1>Logout Page</h1>
    </>
  )
}

export default Logout
