import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavListItems>
      <li>Home</li>
      <li>Facorite</li>
      <li>Random</li>
      <li>Suprice</li>
    </NavListItems>
  );
};

const NavListItems = styled.li`
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1.8rem;
  
`;
export default Navigation;
