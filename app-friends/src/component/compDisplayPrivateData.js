import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompForm from "./compForm";
import { ContextObject } from "../App";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const CompDisplayPrivateData = (props) => {
  const { stateArray, set_stateArray, stateNewFriend, set_stateNewFriend } =
    useContext(ContextObject);
  return (
    <Constainer>
      <h3>CompDisplayPrivateData.js</h3>
      <p>props.stateArray = {stateArray.length}</p>
      <p>
        props.stateNewFriend ={" "}
        {stateNewFriend ? JSON.stringify(stateNewFriend) : "null"}
      </p>
      {stateArray.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
    </Constainer>
  );
};

export default CompDisplayPrivateData;
