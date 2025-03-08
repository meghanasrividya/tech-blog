// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Tech Blog. All Rights Reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

export default Footer;
