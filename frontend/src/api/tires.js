import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getTires() {
  return axios.get(`${apiUrl}/tires`).then((res) => res.data);
}

export function getTireById(id) {
  return axios.get(`${apiUrl}/tires/${id}`).then((res) => res.data);
}
