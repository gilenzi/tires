import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router';
import {getTireById} from '../../api/tires';

export function TireDetails(props) {
  const {id} = useParams();
  const tireDetailsQuery = useQuery({
    queryKey: ['tire-details', id],
    queryFn: () => getTireById(id),
  });

  if (tireDetailsQuery.isLoading) return <h1>Loading details</h1>;
  if (tireDetailsQuery.isError) return <h1>Error loading details</h1>;

  return (
    <div>
      <h1>TIRE DETAILS</h1>
      {tireDetailsQuery.data.tire_id}
    </div>
  );
}
