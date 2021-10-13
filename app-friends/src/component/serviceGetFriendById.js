import axios from "axios";
import { API_URL } from "../constant/constant";

/**
 * if the call is successful
 * .....get token and store token in localStorage
 * if the call fail
 * .....display error message
 * @param {*} credential = {username:text, password:text}
 */
const cb_serviceGetFriendById = (token, id) => {
  return axios
    .create({ baseURL: API_URL, headers: { authorization: token } })
    .get(`/api/friends/${id}`);
};

export default cb_serviceGetFriendById;

/*
   axiosWithAuth()
      .get('/data')
      .then(resp=> {
        this.setState({
          gasPrices: resp.data.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
*/
