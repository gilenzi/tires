import {
  Brand,
  Card,
  TireImage,
  Price,
  PriceSection,
  Specifications,
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
      <Brand
        src={`${apiUrl}${brand_image}`}
        alt={`Brand ${brand_name} image`}
      />
      <Specifications>{specifications}</Specifications>

      <TireImage src={`${apiUrl}${image_url}`} alt="Tire image" />

      <PriceSection>
        <Price>{price}</Price>
      </PriceSection>
    </Card>
  );
}
