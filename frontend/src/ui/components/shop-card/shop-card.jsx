import {
  Brand,
  Card,
  TireImage,
  Price,
  PriceSection,
  Specifications,
  BrandWrapper,
  TireImageWrapper,
} from './styled-components';

const apiUrl = import.meta.env.VITE_API_URL;

export function ShopCard({cardData}) {
  const {
    price,
    stock_quantity,
    image_url,
    brand: {brand_name, image_url: brand_image},
    height: {height},
    width: {width},
    radius: {radius},
    type: {type_name},
  } = cardData;

  const specifications = `${width}/${height} R${radius}`;

  return (
    <Card>
      <BrandWrapper>
        <Brand
          className="brand-img"
          src={`${apiUrl}${brand_image}`}
          alt={`Brand ${brand_name} image`}
        />
      </BrandWrapper>

      <Specifications>{specifications}</Specifications>
      <TireImageWrapper>
        <TireImage src={`${apiUrl}${image_url}`} alt="Tire image" />
      </TireImageWrapper>

      <PriceSection>
        <Price>{price}</Price>
      </PriceSection>
    </Card>
  );
}
