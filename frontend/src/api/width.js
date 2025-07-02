import api from './axios';

export function getWidth() {
  return api.get(`/width`).then((res) => res.data);
}

export function getWidthById(id) {
  return api.get(`/width/${id}`).then((res) => res.data);
}
