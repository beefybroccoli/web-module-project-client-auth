import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ContextObject } from "../App";
import CompDisplayPrivateData from "./compDisplayPrivateData";
import cb_serviceGetFriends from "./serviceGetFriends";
import cb_serviceGetFriendById from "./serviceGetFriendById";

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
  const history = useHistory();

  useEffect(() => {
    //working
    // cb_serviceGetFriends(stateToken).then((res) => {
    //   set_stateArray([...stateArray, ...res.data]);
    // });

    cb_serviceGetFriendById(stateToken, "3").then((res) => {
      console.log("res by id - res.data ", res.data);
      set_stateArray([...stateArray, res.data]);
    });
  }, []);

  if (stateToken !== "") {
    return (
      <Container>
        <h2>PageProfile.js</h2>
        <CompDisplayPrivateData />
      </Container>
    );
  } else {
    history.push("/");
  }
};

export default PageProfile;
