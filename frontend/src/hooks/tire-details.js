import {useQuery} from '@tanstack/react-query';
import {getTireById} from '../api/tires';

export function useTireDetails(tireId) {
  const tireDetailsQuery = useQuery({
    queryKey: ['tire-details', tireId],
    queryFn: () => getTireById(tireId),
  });

  return {
    data: tireDetailsQuery.data || {},
    isLoading: tireDetailsQuery.isLoading,
    isError: tireDetailsQuery.isError,
  };
}
