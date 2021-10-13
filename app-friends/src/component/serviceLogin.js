import axios from "axios";
import * as con from "../constant/constant";

/**
 * if the call is successful
 * .....get token and store token in localStorage
 * if the call fail
 * .....display error message
 * @param {*} credential = {username:text, password:text}
 */
const cb_serviceLogin = (credential) => {
  axios.post(con.API_URL_POST_Login, credential).then((res) => {
    console.log("res");
  });
};

/*
    axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(resp => {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role);
        localStorage.setItem("username", resp.data.username);
        
        this.props.history.push('/protected');
      })
      .catch(err=> {
        console.log(err);
      })
*/
