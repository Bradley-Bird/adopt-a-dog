import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomeDog({ dogs }) {
  return (
    <Grid>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>
            <img src={dog.image}></img>
            <p>{dog.name}</p>
          </Link>
        </div>
      ))}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  grid-gap: 3rem;

  div {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    display: flex;
    overflow: wrap;
    justify-content: center;
    align-items: center;
    border: 2px black solid;
    padding: 25px 0;
    p {
      color: #f8f0e3;
      position: relative;
      border: 3px outset;
      border-image: linear-gradient(to left, #544a7d, #ffd452) 10;
      width: 100px;
      padding: 10px 0;
    }
    img {
      border-radius: 1em;
      box-shadow: 10px 10px 5px rgba(35, 43, 43, 0.5);
    }
  }
`;
export default HomeDog;
