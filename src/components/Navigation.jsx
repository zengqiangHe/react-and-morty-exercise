import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavListItems>
      <li>Home</li>
      <li>Favorite</li>
      <li>Random</li>
      <li>Suprice</li>
    </NavListItems>
  );
};

const NavListItems = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1.8rem;
  background-color: #333;
  position:sticky;
  bottom:0;
  padding:20px;
  width:100%;
  color:white;
  
`;
export default Navigation;
