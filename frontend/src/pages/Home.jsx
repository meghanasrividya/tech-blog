// src/pages/Home.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff6b6b, #f7b7a3, #ff9f43, #ffcd56); /* Gradient background */
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  color: white;
  font-family: 'Arial', sans-serif;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  animation: textAnimation 1s ease-out;

  @keyframes textAnimation {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #2980b9;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  
  &:hover {
    background-color: #3498db;
    transform: scale(1.1); /* Slightly enlarge button on hover */
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
  }

  svg {
    margin-left: 10px;
    font-size: 1.8rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px); /* Move icon on hover */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to the Tech Blog!</Heading>
      <StyledLink to="/next">
        Go to Next Page
        <FaArrowRight />
      </StyledLink>
    </HomeContainer>
  );
};

export default Home;
