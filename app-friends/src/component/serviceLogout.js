import axios from "axios";
import * as con from "../constant/constant";

const cb_serviceLogout = (token) => {
  return axios
    .create({ baseURL: con.API_URL, headers: { authorization: token } })
    .post("/api/logout");
};
export default cb_serviceLogout;
/*

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            authorization: token
        }
    });
}
axiosWithAuth()
            .post('/logout')
            .then(resp=>{
                localStorage.removeItem("token");
                props.history.push('/login');
            }).catch(err=> {
                console.log(err);
            })
*/
