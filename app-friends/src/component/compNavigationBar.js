import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { ContextObject } from "../App";
import cb_serviceLogout from "./serviceLogout";

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
  const { stateToken, set_stateToken } = useContext(ContextObject);
  const cb_onClick = (event) => {
    cb_serviceLogout(stateToken).then((res) => {
      console.log("compNavigationBar - res = ", res);
    });
  };

  return (
    <Container>
      <NavLink to="/">Home</NavLink>

      {stateToken ? <NavLink to="/profile">Profile</NavLink> : null}
      {stateToken ? <button onClick={cb_onClick}>Log Out</button> : null}
    </Container>
  );
};

export default CompNavigationBar;
