import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import { ContextObject } from "../App";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const CompFormLogin = (props) => {
  const initialState = {
    username: "lambda",
    password: "school",
  };
  const [stateForm, set_stateForm] = useState(initialState);
  const { set_stateNewFriend } = useContext(ContextObject);

  const cb_onChange = (event) => {
    set_stateForm({ ...stateForm, [event.target.name]: event.target.value });
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    set_stateNewFriend(stateForm);
    set_stateForm(initialState);
  };

  return (
    <Constainer>
      <h2>CompForm.js</h2>
      <form onSubmit={cb_onSubmit}>
        <label>
          {" "}
          name :{" "}
          <input
            name="username"
            id="username"
            value={stateForm.username}
            type="text"
            onChange={cb_onChange}
          />
        </label>
        <label>
          {" "}
          age :{" "}
          <input
            name="password"
            id="password"
            value={stateForm.password}
            type="text"
            onChange={cb_onChange}
          />
        </label>
        <button>Login</button>
      </form>
    </Constainer>
  );
};

export default CompFormLogin;
