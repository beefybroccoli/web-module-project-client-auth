import axios from "axios";
import { API_URL } from "../constant/constant";

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
