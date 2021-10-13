import axios from "axios";
import { API_URL } from "../constant/constant";

/**
 * if the call is successful
 * .....get token and store token in localStorage
 * if the call fail
 * .....display error message
 * @param {*} credential = {username:text, password:text}
 */
const cb_serviceAddFriend = (token, newFriend) => {
  return axios
    .create({ baseURL: API_URL, headers: { authorization: token } })
    .post(`/api/friends/`, newFriend);
};

export default cb_serviceAddFriend;

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
