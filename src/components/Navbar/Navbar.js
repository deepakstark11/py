import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavHead
  // NavBtn,
  // NavBtnLink,
} from './NavbarElements';
import logo from '../../img/icon.png';
import Burger from './Burger';
const Navbar = () => {
  return (
    <>
      <Nav>
        
        <NavHead>
        
        <NavLink to='/' activeStyle>
           <img src={logo} alt="Logo" height="20px" width="20px" />
            &nbsp;&nbsp;
            <p style={{
              font: 'Josefin Sans',
              color: '#1D2671'
            }}>
              Pyxel 
            </p>
            <p style={{
              font: 'Josefin Sans',
              color: '#C33764'
            }}>
              &nbsp;AI
            </p>
        </NavLink>
        </NavHead>
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            Contact
          </NavLink>
        
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <Burger />
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;