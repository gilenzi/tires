import {useSearchParams} from 'react-router';

export function useGetSearchParams() {
  const [searchParams] = useSearchParams();

  const allParams = {};

  for (const [key, value] of searchParams.entries()) {
    if (allParams[key]) {
      allParams[key].push(value);
    } else {
      allParams[key] = [value];
    }
  }

  return allParams;
}
