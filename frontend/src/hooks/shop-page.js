import {useQuery} from '@tanstack/react-query';
import {getTires} from '../api/tires';

function formatDataForPagination(currentPage, displayPerPage, data) {
  const start = currentPage * displayPerPage;
  const end = start + displayPerPage;
  return data.slice(start, end);
}

export function useShopPage(paginationOptions = {}) {
  const tiresQuery = useQuery({
    queryKey: ['tires'],
    queryFn: getTires,
    staleTime: Infinity,
  });

  const shouldPaginate = Object.keys(paginationOptions).length > 0;

  const paginatedData =
    tiresQuery.data && shouldPaginate
      ? formatDataForPagination(
          paginationOptions.currentPage,
          paginationOptions.displayPerPage,
          tiresQuery.data
        )
      : tiresQuery.data || [];

  return {
    data: paginatedData,
    totalItemsLength: tiresQuery.data?.length || 0,
    isLoading: tiresQuery.isLoading,
    isError: tiresQuery.isError,
  };
}
