import React from 'react';
import styled from 'styled-components';

function DogForm({
  dog,
  dog: { name, bio, age, breed, image },
  setDog,
  createNewDog,
  edit,
  handleUpdate,
}) {
  const updateDog = (att, val) => {
    const newDog = { ...dog, [att]: val };
    setDog(newDog);
  };

  return (
    <Container>
      <StyledForm>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => updateDog('name', e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => updateDog('age', e.target.value)}
        />
        <BioInput
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => updateDog('bio', e.target.value)}
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => updateDog('breed', e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => updateDog('image', e.target.value)}
        />
        <button onClick={edit ? handleUpdate : createNewDog}>{edit ? 'Update' : 'Save'}</button>
      </StyledForm>
    </Container>
  );
}
const BioInput = styled.textarea`
  height: 200px;
  resize: none;
  border-radius: 0.5em;
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  position: relative;
  left: 40%;
  border: 2px black solid;
  width: 250px;
  padding: 25px 0;
`;
export default DogForm;
