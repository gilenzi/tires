import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getRadius() {
  return axios.get(`${apiUrl}/radius`).then((res) => res.data);
}

export function getRadiusById(id) {
  return axios.get(`${apiUrl}/radius/${id}`).then((res) => res.data);
}
