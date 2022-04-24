import Card from "../components/Cards";
import styled from "styled-components";

const Home = ({ characters }) => {
  return (
    <HomePageContainer>
      {characters.map((character) => (
        <Card key={character.id} character={character} showDetails={false} />
      ))}
    </HomePageContainer>
  );
};

const HomePageContainer = styled.ul``;
export default Home;
