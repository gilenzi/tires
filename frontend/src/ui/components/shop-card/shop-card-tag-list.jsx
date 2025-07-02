import styled from 'styled-components';
import {ShopCardTag} from './shop-card-tag';

const TagList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export function ShopCardTagList({data}) {
  const tagItems = data
    .filter(({display}) => display)
    .map(({type, text}) => {
      return <ShopCardTag key={type} text={text} variant={type} />;
    });
  return <TagList className="card-tag-list">{tagItems}</TagList>;
}
