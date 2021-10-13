import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompForm from "./compFormAdd";
import { ContextObject } from "../App";
import CompDisplayPrivateData from "./compDisplayPrivateData";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageProfile = (props) => {
  const { stateArray, set_stateArray, stateNewFriend, set_stateNewFriend } =
    useContext(ContextObject);
  return (
    <Constainer>
      <h2>PageProfile.js</h2>
      <CompDisplayPrivateData />
    </Constainer>
  );
};

export default PageProfile;
