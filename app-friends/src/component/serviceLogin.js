import axios from "axios";
import { API_URL_POST_Login } from "../constant/constant";

const cb_serviceLogin = (credential) => {
  return axios.post(API_URL_POST_Login, credential);
};

export default cb_serviceLogin;

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
