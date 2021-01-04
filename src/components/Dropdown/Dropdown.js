import React from 'react';
import { menuData } from '../../data/MenuData';
import { Button } from '../Navbar/styled';
import {
  ButtonWrapper,
  CloseIcon,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
  DropdownWrapper,
  Icon,
} from './styled';

const Dropdown = ({ isDropdownOpen, toggleDropdown }) => {
  if (!isDropdownOpen) return null;

  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon onClick={toggleDropdown} />
      </Icon>

      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>

        <ButtonWrapper>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </ButtonWrapper>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
