// import React, { useState } from 'react'
// import "./Navbar.css"

// const Navbar = () => {
//   // const [isHome,isHome]=useState(false);

//   return (
//     <div className='navbar'>
//       <div className='header'>
//         <div className='logo'>
//           <img className='navpic' src="src/assets/logo.png"></img>RoomBooking
//         </div>
//         <div className='navLinks'>
//           <ul>
//             <li className='navli'><a className='nava' href="#">Home</a></li>
//             <li className='navli'><a className='nava' href="#">search</a></li>
//             <li className='navli'><a className='nava' href="#">Rooms</a></li>
//             <button id='profile' class="signin_btn">Sign IN</button>
//             <button id='profile' class="signup_btn">Sign UP</button>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Navbar

import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className='navbar'>
      <div className='header'>
        <div className='logo'>
          <img className='navpic' src="src/assets/logo.png" alt="Logo"></img>RoomBooking
        </div>
        <div className='navLinks'>
          <ul>
            <li className='navli'>
              <a className={`nava ${activeLink === 'Home' ? 'active' : ''}`} href="#" onClick={() => handleNavClick('Home')}>Home</a>
            </li>
            <li className='navli'>
              <a className={`nava ${activeLink === 'Search' ? 'active' : ''}`} href="#" onClick={() => handleNavClick('Search')}>Search</a>
            </li>
            <li className='navli'>
              <a className={`nava ${activeLink === 'Rooms' ? 'active' : ''}`} href="#" onClick={() => handleNavClick('Rooms')}>Rooms</a>
            </li>
            <button id='profile' className="signin_btn">Sign IN</button>
            <button id='profile' className="signup_btn">Sign UP</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
