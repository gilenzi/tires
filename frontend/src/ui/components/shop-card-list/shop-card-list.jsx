import {Link} from 'react-router';
import {ShopCard} from '../shop-card/shop-card';
import {CardList} from './styled-components';

export function ShopCardList({cards}) {
  return (
    <CardList>
      {cards.map((card) => (
        <li key={card.tire_id}>
          <Link to={`tire/${card.tire_id}`}>
            <ShopCard cardData={card} />
          </Link>
        </li>
      ))}
    </CardList>
  );
}
