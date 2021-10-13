import React from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import CompForm from "./compForm";
import PageProfile from "./pageProfile";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageHome = (props) => {
  return (
    <Constainer>
      <h2>PageHome.js</h2>
      <main>
        <PageProfile
          stateArray={props.stateArray}
          set_stateNewFriend={props.set_stateNewFriend}
        />
        <CompForm set_stateNewFriend={props.set_stateNewFriend} />
      </main>
    </Constainer>
  );
};

export default PageHome;
