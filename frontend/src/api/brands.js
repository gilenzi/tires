import api from './axios';

export function getBrands() {
  return api.get(`/brands`).then((res) => res.data);
}

export function getBrandById(id) {
  return api.get(`/brands/${id}`).then((res) => res.data);
}
