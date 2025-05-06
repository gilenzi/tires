import {
  AccordionItem as BaseAccordionItem,
  AccordionItemButton as BaseAccordionItemButton,
  AccordionItemContent as BaseAccordionItemContent,
} from '../../../components/accordion/accordion';
import styled, {css} from 'styled-components';

export const FilterWrapper = styled.div`
  max-width: 250px;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: #333;

  html[data-theme='dark'] & {
    color: #dadada;
  }
  & span {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const StyledAccordionItemButton = styled(BaseAccordionItemButton)`
  background-color: transparent;
  padding: 1rem;
  border: none;
  outline: none;
  width: 100%;

  &.active {
    background-color: ${({theme}) => theme.colors.secondary};
  }
`;

export const StyledAccordionItemContent = styled(BaseAccordionItemContent)`
  border: 1px solid #333;
`;

export const StyledIcon = styled.div`
  width: 32px;
  height: 32px;

  & svg {
    width: 32px;
    height: 32px;
  }

  ${({type}) =>
    type === 'chevron' &&
    css`
      margin-left: auto;
    `}

  ${({variant}) =>
    variant === 'small' &&
    css`
      width: 16px;
      height: 16px;

      & svg {
        width: 100%;
        height: 100%;
      }
    `}

  ${({variant}) =>
    variant === 'large' &&
    css`
      width: 48px;
      height: 48px;

      & svg {
        width: 100%;
        height: 100%;
      }
    `}
`;

export const StyledAccordionItem = styled(BaseAccordionItem)`
  &.active {
    & div[type='chevron'] svg {
      transform: rotate(180deg);
      transition: all 0.3s ease-in-out;
    }
  }
`;
