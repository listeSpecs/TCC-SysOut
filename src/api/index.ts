import axios from "axios";

const token = window.localStorage.getItem('token');

export const api = axios.create({
  headers: {
    'Authorization': token ? `Bearer ${token}` : '',
  },
  baseURL: "https://ordermdeservicoapi.herokuapp.com",
});

