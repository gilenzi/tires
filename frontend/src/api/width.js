import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getWidth() {
  return axios.get(`${apiUrl}/width`).then((res) => res.data);
}

export function getWidthById(id) {
  return axios.get(`${apiUrl}/width/${id}`).then((res) => res.data);
}
