import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const CompForm = (props) => {
  const initialState = {
    id: "",
    name: "sam",
    age: 20,
    email: "sam@aol.com",
    role: "",
  };
  const [stateForm, set_stateForm] = useState(initialState);

  return (
    <Constainer>
      <h2>CompForm.js</h2>
      <form>
        <label>
          {" "}
          name :{" "}
          <input name="name" id="name" value={stateForm.name} type="text" />
        </label>
        <label>
          {" "}
          age :{" "}
          <input name="age" id="age" value={stateForm.age} type="number" />
        </label>
        <label>
          email :{" "}
          <input name="email" id="email" value={stateForm.email} type="text" />
        </label>
        <label>
          {" "}
          role :{" "}
          <select name="role" id="role" value={stateForm.role}>
            <option value="none">none</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>{" "}
        </label>
      </form>
    </Constainer>
  );
};

export default CompForm;
