import styled from 'styled-components';
import IconPlus from '../../assets/icon-plus.svg';
import IconMinus from '../../assets/icon-minus.svg';
import {useState} from 'react';

const AddToCartWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const IncreaseWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  min-width: 130px;
  border: 1px solid #c2d4e5;
  overflow: hidden;
  padding: 0.4rem;
`;

const QtyInput = styled.input`
  outline: none;
  border: none;
  text-align: center;
  width: 45px;
`;

const IconWrapper = styled.button`
  outline: none;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: #fff;
`;

const AddToCartButton = styled.button`
  outline: none;
  border: none;
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  background-color: #1764a7;
  color: #fff;
  cursor: pointer;
`;

export function AddToCart(props) {
  const [qty, setQty] = useState(1);

  const increaseHandler = () => {
    setQty(qty + 1);
  };

  const decreaseHandler = () => {
    setQty((prev) => (prev !== 1 ? prev - 1 : 1));
  };

  return (
    <AddToCartWrapper>
      <IncreaseWrapper>
        <IconWrapper onClick={decreaseHandler}>
          <img src={IconMinus} alt="Icon minus" />
        </IconWrapper>
        <QtyInput
          type="number"
          value={qty}
          min="1"
          step="1"
          onChange={increaseHandler}
        />
        <IconWrapper onClick={increaseHandler}>
          <img src={IconPlus} alt="Icon plus" />
        </IconWrapper>
      </IncreaseWrapper>
      <AddToCartButton>Add To Cart</AddToCartButton>
    </AddToCartWrapper>
  );
}
