import axios from "axios";
import { BASE_URL } from "../constants/constants";

export async function editJob(editData) {
    let response = {response: {}, error: false};
    await axios.put(`${BASE_URL}/jobs/${editData.id}`,{
        ...editData
    }).then(res => {
        response.response = res
    }).catch(err => {
        response.response = err
        response.error = true
    })
    console.log(response)
    return response
}