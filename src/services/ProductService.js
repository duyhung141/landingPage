import axios from "axios";
import {API} from "../utils/apiUrl";

export const getAll = async () => {
    const res = await axios.get(`${API}/api/v1/product`);
    return res;
}

export const show = async (id) => {
    const res = await axios.get(`${API}/api/v1/product/${id}`);
    return res;
}