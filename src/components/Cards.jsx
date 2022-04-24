import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CardButton from "./CardButton";

const Cards = ({ character,  showDetails}) => {
  // const [showDetails, setShowDetails] = useState(false);
/*
const handleDetails = () => {
    setShowDetails((changeState) => !changeState);
  };
  */

  return (
    <CardsContainer>
      <CardsItems>
        <img src={character.image} alt="a pic of character" />
        <h2>{character.name}</h2>
        {showDetails ? (
          <div>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
          </div>
        ) : null}

        <CardButton id={character.id} showDetails={showDetails} />
      </CardsItems>
    </CardsContainer>
  );
};

const CardsItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  background-color: #7cd1b8;
  width: 65%;
  margin-top: 15px;
  margin-right: 15%;
  padding: 3%;
  padding-bottom: auto;
  color: white;
  border-radius: 5%;
  box-shadow: 3px 4px 4px white;
`;
const CardsContainer = styled.ul`
  display: flex;
  justify-content: center;
`;
export default Cards;
