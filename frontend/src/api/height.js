import api from './axios';

export function getHeight() {
  return api.get(`/height`).then((res) => res.data);
}

export function getHeightById(id) {
  return api.get(`/height/${id}`).then((res) => res.data);
}
