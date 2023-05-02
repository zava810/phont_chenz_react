import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from './Navbar';
import styled from 'styled-components';
import Phont_selects from './Phont_selects';


const Header = () => {
  return (
    <MainHeader>
    <header>
      <div className='hedr_div'>
        <div>
          <NavLink to="/">
            <img src='./imz/tvilogo.jpg' alt='logo' height={40} width={40}/>
          </NavLink>
        </div>
        <div><Phont_selects/></div>
        <div><Navbar/></div>
      </div>
    </header>
    </MainHeader>
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hedr_div {display:flex}
  .logo {
    height: auto;
    max-width: 30%;
  }
`;
export default Header