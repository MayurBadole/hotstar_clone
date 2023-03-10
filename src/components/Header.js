import styled from 'styled-components';
import React from 'react'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" alt=" nav logo"/>
        <Login> Login </Login>
    </Nav>
  )
}


const Nav = styled.nav`
position: fixed; 
top : 0;
right:0;
left:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items: center;
padding:0 36px;
z-index:3;

`;

const Logo = styled.img`
    max-height: 40px;
    width: 80px;
    padding:0px;

`;

const Login = styled.a``;
export default Header;