import Cards from "./../components/Cards";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CardDetails = ({ characters }) => {
  const { id } = useParams();
  const currentCharacter = characters.find(
    (character) => character.id === Number(id)
  );
  return (
    <DetailContainer>
      {currentCharacter ? (
        <Cards character={currentCharacter} showDetails={true}></Cards>
      ) : (
        " "
      )}
    </DetailContainer>
  );
};

const DetailContainer = styled.ul``;
export default CardDetails;
