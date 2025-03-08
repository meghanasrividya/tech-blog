// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">Tech Blog</Link>
      </Logo>
      <Nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      color: #007BFF;
    }
  }
`;

export default Header;
