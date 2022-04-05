import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StyledHeader>React and Morty</StyledHeader>;
};

const StyledHeader = styled.h1`
display:flex;
justify-content:center;

  list-style-type: none;
  gap: 1.8rem;
  background-color: #FC5050;
  position:fixed;
  top:0;
  padding:30px;
  width:100%;
  color:white;
`;



export default Header;