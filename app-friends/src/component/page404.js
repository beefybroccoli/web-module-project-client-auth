import React from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Constainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;

const Page404 = (props) => {
  const history = useHistory();
  history.push("/");
  return (
    <Constainer>
      <h2>Page404.js</h2>
    </Constainer>
  );
};

export default Page404;
