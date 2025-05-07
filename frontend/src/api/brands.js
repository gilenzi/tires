import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getBrands() {
  return axios.get(`${apiUrl}/brands`).then((res) => res.data);
}

export function getBrandById(id) {
  return axios.get(`${apiUrl}/brands/${id}`).then((res) => res.data);
}
