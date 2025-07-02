import axios from 'axios';
import api from './axios';

export function getType() {
  return api.get(`/type`).then((res) => res.data);
}

export function getTypeById(id) {
  return api.get(`/type/${id}`).then((res) => res.data);
}
