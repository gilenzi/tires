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
import {FilterParamsList} from './filter-params-list';
import {PriceFilter} from '../price-filter';
import {useSearchParams} from 'react-router';

export function ShopFilter({brands, types, price}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function resetFitler() {
    setSearchParams({});
  }
  return (
    <FilterWrapper>
      <Accordion defaultItem="brand" multiple>
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
            <FilterParamsList data={brands} dataName="brand" />
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
            <FilterParamsList data={types} dataName="type" />
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
            <PriceFilter price={price} />
          </StyledAccordionItemContent>
        </StyledAccordionItem>
      </Accordion>
      <button onClick={resetFitler}>Reset filter</button>
    </FilterWrapper>
  );
}
