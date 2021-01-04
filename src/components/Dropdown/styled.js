import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;

  background: #831C1C;
  display: grid;
  align-items: center;

  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: #000d1a;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.5 ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #000d1a;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
