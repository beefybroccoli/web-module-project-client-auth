import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { ContextObject } from "../App";

const Container = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;
const CompNavigationBar = (props) => {
  const { stateToken } = useContext(ContextObject);
  const cb_onClick = (event) => {};

  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {stateToken ? <button onClick={cb_onClick}>Log Out</button> : null}
    </Container>
  );
};

export default CompNavigationBar;
