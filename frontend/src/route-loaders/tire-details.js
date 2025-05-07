import {useQuery} from '@tanstack/react-query';
import {getTireById} from '../api/tires';

export async function tireDetailsLoader({params: {id}}) {
  const data = await getTireById(id);
  return data;
}
