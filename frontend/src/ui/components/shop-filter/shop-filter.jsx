import {Accordion} from '../../../components/accordion/accordion';
import {FaRegStar, FaMoneyBill, FaChevronDown} from 'react-icons/fa';
import IconBrand from '../../../assets/icon-brend.svg';
import {
  StyledAccordionItem,
  StyledAccordionItemButton,
  StyledAccordionItemContent,
  FilterHeader,
  FilterWrapper,
  StyledIcon,
} from './styled-components';

export function ShopFilter(props) {
  return (
    <FilterWrapper>
      <Accordion defaultItem="brand">
        <StyledAccordionItem name="brand">
          <StyledAccordionItemButton>
            <FilterHeader>
              <StyledIcon>
                <img src={IconBrand} alt="brand icon" />
              </StyledIcon>
              <span>Brand</span>
              <StyledIcon type="chevron" variant="small">
                <FaChevronDown />
              </StyledIcon>
            </FilterHeader>
          </StyledAccordionItemButton>
          <StyledAccordionItemContent>
            <p>Accordion brand desc</p>
          </StyledAccordionItemContent>
        </StyledAccordionItem>

        <StyledAccordionItem name="type-of-ride">
          <StyledAccordionItemButton>
            <FilterHeader>
              <StyledIcon>
                <FaRegStar />
              </StyledIcon>
              <span>Type of ride</span>
              <StyledIcon type="chevron" variant="small">
                <FaChevronDown />
              </StyledIcon>
            </FilterHeader>
          </StyledAccordionItemButton>
          <StyledAccordionItemContent name="type-of-ride">
            Accordion type desc
          </StyledAccordionItemContent>
        </StyledAccordionItem>

        <StyledAccordionItem name="price">
          <StyledAccordionItemButton>
            <FilterHeader>
              <StyledIcon>
                <FaMoneyBill />
              </StyledIcon>
              <span>Price</span>
              <StyledIcon type="chevron" variant="small">
                <FaChevronDown />
              </StyledIcon>
            </FilterHeader>
          </StyledAccordionItemButton>
          <StyledAccordionItemContent>
            Accordion price desc
          </StyledAccordionItemContent>
        </StyledAccordionItem>
      </Accordion>
    </FilterWrapper>
  );
}
