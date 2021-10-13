import axios from "axios";
import { API_URL } from "../constant/constant";

const cb_serviceGetFriends = (token) => {
  return axios
    .create({ baseURL: API_URL, headers: { authorization: token } })
    .get("/api/friends");
};

export default cb_serviceGetFriends;

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
