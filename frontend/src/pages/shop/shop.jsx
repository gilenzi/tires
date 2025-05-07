import {getTires} from '../../api/tires';
import {ShopFilter} from '../../ui/components/shop-filter/shop-filter';
import {useQuery} from '@tanstack/react-query';
import {ShopMain} from './styled-components';
import {ShopCard} from '../../ui/components/shop-card/shop-card';
import {ShopCardList} from '../../ui/components/shop-card-list/shop-card-list';

export function Shop() {
  const tiresQuery = useQuery({
    queryKey: ['tires'],
    queryFn: () => getTires(),
  });

  if (tiresQuery.isLoading) return <h1>Loading tires</h1>;
  if (tiresQuery.isError) return <h1>Error for fething tires</h1>;

  // const cards = tiresQuery.data.map((tire) => (
  //   <ShopCard />
  // ))

  return (
    <main>
      <ShopMain>
        <ShopFilter />
        <ShopCardList cards={tiresQuery.data} />
      </ShopMain>
    </main>
  );
}
