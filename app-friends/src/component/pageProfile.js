import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { link } from "react-router-dom";
import { ContextObject } from "../App";
import CompDisplayPrivateData from "./compDisplayPrivateData";
import cb_serviceGetFriends from "./serviceGetFriends";

const Container = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;
const PageProfile = (props) => {
  const {
    stateArray,
    set_stateArray,
    stateNewFriend,
    stateToken,
    set_stateNewFriend,
  } = useContext(ContextObject);

  useEffect(() => {
    const promise = cb_serviceGetFriends(stateToken).then((res) => {
      console.log("res = ", res);
      set_stateArray([...stateArray,...res.data]);
    });
  }, []);

  // useEffect(()=>{},[])

  return (
    <Container>
      <h2>PageProfile.js</h2>
      <CompDisplayPrivateData />
    </Container>
  );
};

export default PageProfile;
