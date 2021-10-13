import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import { ContextObject } from "../App";
import cb_serviceAddFriend from "./serviceAddFriend";

const Container = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const CompFormAdd = (props) => {
  const initialState = {
    id: Date.now(),
    name: "sam",
    age: 20,
    email: "sam@aol.com",
    role: "none",
  };
  const [stateForm, set_stateForm] = useState(initialState);
  const { set_stateNewFriend, stateToken } = useContext(ContextObject);

  const cb_onChange = (event) => {
    set_stateForm({ ...stateForm, [event.target.name]: event.target.value });
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    set_stateNewFriend(stateForm);
    set_stateForm(initialState);
    cb_serviceAddFriend(stateToken, stateForm)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <Container>
      <h2>CompForm.js</h2>
      <form onSubmit={cb_onSubmit}>
        <label>
          {" "}
          name :{" "}
          <input
            name="name"
            id="name"
            value={stateForm.name}
            type="text"
            onChange={cb_onChange}
          />
        </label>
        <label>
          {" "}
          age :{" "}
          <input
            name="age"
            id="age"
            value={stateForm.age}
            type="number"
            onChange={cb_onChange}
          />
        </label>
        <label>
          email :{" "}
          <input
            name="email"
            id="email"
            value={stateForm.email}
            type="text"
            onChange={cb_onChange}
          />
        </label>
        <label>
          {" "}
          role :{" "}
          <select
            name="role"
            id="role"
            value={stateForm.role}
            onChange={cb_onChange}
          >
            <option value="none">none</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>{" "}
        </label>
        <button>Submit</button>
      </form>
    </Container>
  );
};

export default CompFormAdd;
