import React from 'react';
import styled from 'styled-components';
import { SideLink } from './NavbarElements'


const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  li {
    padding: 10px 10px;
  }
  @media (max-width: 768px) {
    display : flex;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 90%;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #4568DC;
    }
  }
`;




const RightNav = ({ open }) => {
    return (
      <Ul open={open}>
        <SideLink to='/' activeStyle>
            Home
        </SideLink>
        <SideLink to='/About' activeStyle>
            About
        </SideLink>
        <SideLink to='/Contact' activeStyle>
            Contact
        </SideLink>
      </Ul>
    )
  }
  
  export default RightNav