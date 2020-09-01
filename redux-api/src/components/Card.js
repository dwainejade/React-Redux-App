import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacter } from "../actions/index";

const Character = ({ getCharacter, character, isFetching }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        Random Character Generator:</h2>
          <img src={character.image} alt='avatar'></img>
          <h4>{character.name}</h4>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <br />
      <button onClick={getCharacter}>Get new character</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { character: state.character, isFetching: state.isFetching };
};

const mapDispatchToProps = { getCharacter };

export default connect(mapStateToProps, mapDispatchToProps)(Character);
