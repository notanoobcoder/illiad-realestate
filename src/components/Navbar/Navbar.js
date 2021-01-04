import React from 'react';
import {
  Logo,
  MenuBars,
  Nav,
  NavBtn,
  NavMenu,
  NavMenuLinks,
  Button,
} from './styled';
import { menuData } from '../../data/MenuData';

const Navbar = ({ toggleDropdown }) => {
  return (
    <Nav>
      <Logo to="/">Illiad</Logo>
      <MenuBars onClick={toggleDropdown} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact">Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
