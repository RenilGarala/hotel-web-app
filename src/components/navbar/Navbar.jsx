import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='header'>
        <div className='logo'>
          <img className='navpic' src="src/assets/logo.png"></img>RoomBooking
        </div>
        <div className='navLinks'>
          <ul>
            <li className='navli'><a className='nava' href="#">Home</a></li>
            <li className='navli'><a className='nava' href="#">search</a></li>
            <li className='navli'><a className='nava' href="#">Rooms</a></li>
            <button id='profile' class="signin_btn">Sign IN</button>
            <button id='profile' class="signup_btn">Sign UP</button>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar