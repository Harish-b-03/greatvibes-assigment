import axios from "axios";
import { BASE_URL } from "../constants/constants";

export async function postjob(userData) {
    let response = {response: {}, error: false};
    await axios.post(`${BASE_URL}/jobs`,{
        ...userData
    }).then(res => {
        response.response = res
    }).catch(err => {
        response.response = err
        response.error = true
    })
    return response
}