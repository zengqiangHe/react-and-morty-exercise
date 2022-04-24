import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CardButton({ id, showDetails }) {
  const navigate = useNavigate();

  const displayDetails = () => {
    navigate(`/details/${id}`);
  };
  
  const hideDetails = () => {
    navigate(`/`);
  };
  

  return (
    <>
      {showDetails ? <button onClick={hideDetails}>Show less</button> : <button onClick={displayDetails}>Show more</button>}
    </>
  );
}
