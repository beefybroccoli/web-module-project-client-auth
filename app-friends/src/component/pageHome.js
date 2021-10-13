import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompForm from "./compFormAdd";
import PageProfile from "./pageProfile";
import { ContextObject } from "../App";
import CompDisplayPrivateData from "./compDisplayPrivateData.js";
const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageHome = (props) => {
  const { stateArray, set_stateArray, stateNewFriend, set_stateNewFriend } =
    useContext(ContextObject);
  return (
    <Constainer>
      <h2>PageHome.js</h2>
      <main>
        <CompForm />
        <PageProfile />
      </main>
    </Constainer>
  );
};

export default PageHome;
