import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { AiOutlineAlignRight } from 'react-icons/ai';

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  
`;

const NavLink = css`
  color: white;
  font-style: bold;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: bold;
  color: #202020;
  font-size: 40px;
  font-family: 'Cedarville Cursive', cursive;
`;

export const MenuBars = styled(AiOutlineAlignRight)`
  display: none;
  color: #202020;

  &:hover {
    color: #831C1C;
  }

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  color: #202020;
  font-size: 15px;

  &:hover {
    color: #831C1C;
    transform: scale(1.3);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: #202020;

  &:hover {
    background: #831C1C;
    transform: scale(1.09);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000000' : '#000000')};
  color: ${({ primary }) => (primary ? '#ffffff' : '#ffffff')};

  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    background: #831C1C;
    transform: scale(1.1);
  }
`;
