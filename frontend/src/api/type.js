import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getType() {
  return axios.get(`${apiUrl}/type`).then((res) => res.data);
}

export function getTypeById(id) {
  return axios.get(`${apiUrl}/type/${id}`).then((res) => res.data);
}
