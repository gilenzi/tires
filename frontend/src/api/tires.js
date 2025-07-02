import api from './axios';

function formatDataForPagination(currentPage, displayPerPage, data) {
  const start = currentPage * displayPerPage;
  const end = start + displayPerPage;
  return data.slice(start, end);
}

export function getTires() {
  return api.get(`/tires`).then((res) => res.data);
}

export function getTireById(id) {
  return api.get(`/tires/${id}`).then((res) => res.data);
}
