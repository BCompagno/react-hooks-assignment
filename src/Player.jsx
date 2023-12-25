import React from "react";
import { useState } from "react";

function Player(props) {

  const name = props.name;

  const [score, setScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }
  function decrement() {
    setScore(score -1);
  }

  function deletePlayer() {
      props.onDelete(props.id);
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {/* Render Name here */}
        <h2 className="text-center">{name}</h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">Score: {score/* Render score here */}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button onClick={incrementScore} className="btn btn-outline-primary w-100">Add Point +</button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button onClick={decrement} className="btn btn-outline-danger w-100">
           Remove Point -
          </button>
        </div>
        <div>
          <button onClick={deletePlayer} className="btn  btn-outline-danger w-100">Delete player</button>
        </div>
      </div>
    </div>
  );
}
export default Player;
