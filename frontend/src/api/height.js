import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getHeight() {
  return axios.get(`${apiUrl}/height`).then((res) => res.data);
}

export function getHeightById(id) {
  return axios.get(`${apiUrl}/height/${id}`).then((res) => res.data);
}
