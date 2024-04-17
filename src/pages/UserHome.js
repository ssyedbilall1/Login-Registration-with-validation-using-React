import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
 const handleLogout = () => {
  localStorage.removeItem("successful");
  navigate("/");
 }
  return (
    <>
      <div>Welcome  {userName.name}</div><br></br>
      <button type='button' onClick={handleLogout}>Logout</button>
    </>

  )
}

export default UserHome