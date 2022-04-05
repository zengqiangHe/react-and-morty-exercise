import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StyledHeader>React and Morty</StyledHeader>;
};

const StyledHeader = styled.h1`
display:flex;
justify-content:center;
`;



export default Header;