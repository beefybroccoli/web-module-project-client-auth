import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompFormAdd from "./compFormAdd";
import { ContextObject } from "../App";

const Container = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const CompDisplayPrivateData = (props) => {
  const { stateArray, set_stateArray, stateNewFriend, set_stateNewFriend } =
    useContext(ContextObject);
  return (
    <Container>
      <h3>CompDisplayPrivateData.js</h3>
      <p>props.stateArray = {stateArray.length}</p>
      <p>
        props.stateNewFriend ={" "}
        {stateNewFriend ? JSON.stringify(stateNewFriend) : "null"}
      </p>
      {stateArray.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
    </Container>
  );
};

export default CompDisplayPrivateData;
