import React from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageProfile = (props) => {
  return (
    <Constainer>
      <h2>PageProfile.js</h2>
    </Constainer>
  );
};

export default PageProfile;
