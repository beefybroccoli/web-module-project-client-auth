import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompFormAdd from "./compFormAdd";
import CompFormLogin from "./compFormLogin";
import PageProfile from "./pageProfile";
import { ContextObject } from "../App";
import CompDisplayPrivateData from "./compDisplayPrivateData.js";
const Container = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageHome = (props) => {
  const {
    stateArray,
    set_stateArray,
    stateNewFriend,
    set_stateNewFriend,
    set_stateToken,
  } = useContext(ContextObject);
  return (
    <Container>
      <h2>PageHome.js</h2>
      <main>
        <CompFormLogin />
      </main>
    </Container>
  );
};

export default PageHome;
