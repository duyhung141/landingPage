import axios from "axios";
import {API} from "../utils/apiUrl";

export const getAll = async () => {
    const res = await axios.get(`${API}/api/v1/review`);
    return res.data;
}

export const show = async (id) => {
    const res = await axios.get(`${API}/api/v1/review/${id}`);
    return res.data;
}