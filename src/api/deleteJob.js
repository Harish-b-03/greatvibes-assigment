import axios from "axios";
import { BASE_URL } from "../constants/constants";

export async function deleteJob(id) {
    let response = {response: {}, error: false};
    await axios.delete(`${BASE_URL}/jobs/${id}`)
        .then(res => {
            response.response = res
        }).catch(err => {
            response.response = err
            response.error = true
        })
    return response
}