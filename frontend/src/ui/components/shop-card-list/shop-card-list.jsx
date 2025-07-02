import {Link} from 'react-router';
import {ShopCard} from '../shop-card/shop-card';
import {CardList} from './styled-components';
import {useGetSearchParams} from '../../../hooks/get-search-params';

export function ShopCardList({cards}) {
  const searchParams = useGetSearchParams();

  const filterAccessors = {
    brand: (card) => card.brand.brand_name,
    type: (card) => card.type.type_name,
    width: (card) => String(card.width.width),
    height: (card) => String(card.height.height),
    radius: (card) => String(card.radius.radius),
    price: (card) => String(card.price),
  };

  const displayCards = cards.filter((card) => {
    for (const [key, values] of Object.entries(searchParams)) {
      if (key === 'price') {
        const maxPrice = Number(values[0]);
        if (Number(card.price) > maxPrice) return false;
        continue;
      }

      const accessor = filterAccessors[key];
      if (accessor) {
        const cardValue = accessor(card);
        if (!values.includes(cardValue)) return false;
      }
    }

    return true;
  });

  const noResults = displayCards.length === 0;

  return (
    <CardList>
      {noResults ? (
        <p>There is no results for that filter.</p>
      ) : (
        displayCards.map((card) => (
          <li key={card.tire_id}>
            <Link to={`tire/${card.tire_id}`}>
              <ShopCard cardData={card} />
            </Link>
          </li>
        ))
      )}
    </CardList>
  );
}
