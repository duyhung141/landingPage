import axios from "axios";
import {API} from "../utils/apiUrl";

export const create = async (data) => {
    const res = await axios.post(`${API}/api/v1/order`, data);
    return res.data;
}