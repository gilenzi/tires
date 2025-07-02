import api from './axios';

export function getRadius() {
  return api.get(`/radius`).then((res) => res.data);
}

export function getRadiusById(id) {
  return api.get(`/radius/${id}`).then((res) => res.data);
}
