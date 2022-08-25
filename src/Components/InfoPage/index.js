import React from "react";
import { useLocation } from "react-router-dom";

function Info({ single_user }) {
  const data = useLocation();
  const state = data.state;

  return (
    <div className="form-container">
      <div className="form">
        <h1>Welcome Qdubs</h1>

        <div>
          <h4>Name: {state.name}</h4>
          <span>{single_user.name}</span>
        </div>

        <div>
          <h4>Age: {state.age}</h4>
          <span>{single_user.age}</span>
        </div>

        <div>
          <h4>Email: {state.email}</h4>
          <span>{single_user.email}</span>
        </div>

        <div>
          <h4>Graduation Year: {state.graduation}</h4>
          <span>{single_user.graduation}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
