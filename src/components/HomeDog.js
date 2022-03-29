import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomeDog({ dogs }) {
  return (
    <Grid>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <img src={dog.image}></img>
          <p>{dog.name}</p>
        </Link>
      ))}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  grid-gap: 3rem;
`;
export default HomeDog;
