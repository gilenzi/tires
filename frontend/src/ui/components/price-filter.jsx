import {useState} from 'react';
import {useSearchParams} from 'react-router';
import styled from 'styled-components';

const StyledPriceFilter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  transition: all 0.3s ease-in-out;

  ${({margintop}) => margintop && `margin-top: 1rem;`}
`;

const SelectedPrice = styled.div`
  position: absolute;
  left: 50%;
  top: -1rem;
  transform: translateX(-50%);
  color: #197796;
  font-weight: 700;
`;

const SetPrice = styled.button`
  outline: none;
  border: none;
  color: #fff;
  background-color: #197796;
  padding: 0.2rem 0.5rem;
  display: block;
  margin: 0.3rem;
  margin-left: auto;
  font-weight: 700;
`;

export function PriceFilter({price: {minPrice, maxPrice}}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const settedPrice = searchParams.get('price');

  const [tempPrice, setTempPrice] = useState(settedPrice || minPrice);
  const [selectedPrice, setSelectedPrice] = useState(settedPrice || minPrice);

  const isTempPriceVisible = tempPrice !== minPrice;
  const setPriceBtnText = settedPrice ? 'Unset price' : 'Set price';

  function handleChange(event) {
    setTempPrice(Number(event.target.value));
  }

  function handleChangeEnd(event) {
    setSelectedPrice(Number(event.target.value));
  }

  function handleSetPrice() {
    const newParams = new URLSearchParams(searchParams);

    if (!settedPrice) {
      newParams.set('price', selectedPrice);
      setSearchParams(newParams);
    } else {
      setTempPrice(minPrice);
      setSelectedPrice(minPrice);
      newParams.delete('price', settedPrice);

      setSearchParams(newParams);
    }
  }

  return (
    <div>
      <label htmlFor="price">Price range:</label>
      <StyledPriceFilter margintop={isTempPriceVisible}>
        <span>{minPrice}</span>
        {isTempPriceVisible && <SelectedPrice>{tempPrice}</SelectedPrice>}
        <input
          id="price"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={tempPrice}
          onChange={handleChange}
          onMouseUp={handleChangeEnd}
        />
        <span>{maxPrice}</span>
      </StyledPriceFilter>
      <SetPrice onClick={handleSetPrice}>{setPriceBtnText}</SetPrice>
    </div>
  );
}
