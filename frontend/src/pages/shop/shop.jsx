import {ShopFilter} from '../../ui/components/shop-filter/shop-filter';
import {ShopMain} from './styled-components';
import {ShopCardList} from '../../ui/components/shop-card-list/shop-card-list';
import {useShopPage} from '../../hooks/shop-page';
import {Spinner} from '../../ui/components/spinner';
import {useShopFilters} from '../../hooks/shop-filters';
import {useState} from 'react';
import {Pagination} from '../../ui/components/pagination/pagination';

export function Shop() {
  const [currentPage, setCurrentPage] = useState(0);
  const displayPerPage = 5;
  const {
    data: tiresData,
    totalItemsLength,
    isLoading: isShopPageLoading,
    isError,
  } = useShopPage({currentPage, displayPerPage});
  const {brands, types, isLoading: isFiltersLoading} = useShopFilters();

  const isLoading = isFiltersLoading && isShopPageLoading;

  const minPrice = tiresData.reduce(
    (min, tire) => (tire.price < min ? tire.price : min),
    Infinity
  );

  const maxPrice = tiresData.reduce(
    (min, tire) => (tire.price > min ? tire.price : min),
    -Infinity
  );

  return (
    <main>
      <ShopMain>
        {isLoading ? (
          <Spinner width={'55px'} height={'55px'} />
        ) : (
          <>
            <ShopFilter
              brands={brands}
              types={types}
              price={{minPrice, maxPrice}}
            />
            <ShopCardList cards={tiresData} />
          </>
        )}
      </ShopMain>
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayPerPage={displayPerPage}
          totalItemsLength={totalItemsLength}
        />
      )}
    </main>
  );
}
