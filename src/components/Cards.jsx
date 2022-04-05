import React from "react";
import styled from "styled-components";

const Cards = () => {
  return (
    <CardsContainer>
      <CardsItems>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="a pic of Morty Smith"
        />
        <h2>Morty Smith</h2>
      </CardsItems>
    </CardsContainer>
  );
};

const CardsItems = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #FFD00C;
  width:70%;
  margin-top:150px;
  margin-right:20px;
  padding:10px;
  color:white;
  border-radius:5%;
  box-shadow:3px 4px 4px white;
  

`;
const CardsContainer = styled.ul`
display:flex;
justify-content:center;

`;
export default Cards;
