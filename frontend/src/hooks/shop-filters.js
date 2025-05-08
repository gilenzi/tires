import {useQuery} from '@tanstack/react-query';
import {getBrands} from '../api/brands';
import {getType} from '../api/type';

export function useShopFilters() {
  const {
    isLoading: brandsLoading,
    isError: brandsError,
    data: brands,
    error: brandsErrorData,
  } = useQuery({queryKey: ['brands'], queryFn: getBrands});

  const {
    isLoading: typesLoading,
    isError: typesError,
    data: types,
    error: typesErrorData,
  } = useQuery({queryKey: ['tire-type'], queryFn: getType});

  return {
    isLoading: brandsLoading || typesLoading,
    isError: brandsError || typesError,
    error: brandsErrorData || typesErrorData,
    brands: brands ?? [],
    types: types ?? [],
  };
}
