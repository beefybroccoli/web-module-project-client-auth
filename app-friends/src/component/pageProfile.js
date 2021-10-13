import React from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompForm from "./compForm";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageProfile = (props) => {
  return (
    <Constainer>
      <h2>PageProfile.js</h2>
      <p>props.stateArray = {props.stateArray.length}</p>
      <p>
        props.stateNewFriend ={" "}
        {props.stateNewFriend ? JSON.stringify(props.stateNewFriend) : "null"}
      </p>
      {props.stateArray.map((each) => {
        return <p>{JSON.stringify(each)}</p>;
      })}
    </Constainer>
  );
};

export default PageProfile;
