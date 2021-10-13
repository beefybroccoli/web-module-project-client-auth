import axios from "axios";
import * as con from "../constant/constant";

const cb_serviceLogout = () => {};

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
