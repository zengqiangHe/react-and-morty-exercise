import React from "react";
import styled from "styled-components";

const Cards = ({ image, name }) => {
  return (
    <CardsContainer>
      <CardsItems>
     <img src={image} alt='a pic of character'/>
     <h2>{name}</h2>
     </CardsItems>
    </CardsContainer>
  );
};

const CardsItems = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #7cd1b8;
  width: 70%;
  margin-top: 15px;
  margin-right: 20px;
  padding: 10px;
  color: white;
  border-radius: 5%;
  box-shadow: 3px 4px 4px white;
`;
const CardsContainer = styled.ul`
  display: flex;
  justify-content: center;
`;
export default Cards;
