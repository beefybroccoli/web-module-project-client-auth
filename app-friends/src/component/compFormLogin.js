import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ContextObject } from "../App";
import cb_serviceLogin from "../component/serviceLogin";

const Container = styled.div`
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
  const [stateError, set_stateError] = useState(null);
  const { set_stateToken } = useContext(ContextObject);

  const cb_onChange = (event) => {
    set_stateForm({ ...stateForm, [event.target.name]: event.target.value });
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    set_stateForm(initialState);
    const promise = cb_serviceLogin(stateForm);
    promise
      .then((res) => {
        set_stateToken(res.data.payload);
      })
      .catch((error) => {
        set_stateError(error);
      });
  };

  return (
    <Container>
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
        {stateError ? <p>{JSON.stringify(stateError)}</p> : null}
        <button>Login</button>
      </form>
    </Container>
  );
};

export default CompFormLogin;
