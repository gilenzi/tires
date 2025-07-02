import {TireTypeIcon} from '../tire-type-icon';
import {ShopCardFeaturesList} from './shop-card-features-list';
import {ShopCardTag} from './shop-card-tag';
import {ShopCardTagList} from './shop-card-tag-list';
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
    type: {type_name: typeName},
    load_index: loadIndex,
    best_selling: bestSelling,
    seep_index: speedIndex,
    consumption,
    noise,
    recommended,
    quality_class: qualityClass,
    discount_price: discountPrice,
  } = cardData;

  const tagListData =
    [
      {
        type: 'discount',
        text:
          price > 0
            ? `Discount ${Math.round(((price - discountPrice) / price) * 100)}%`
            : 'Discount',
        display: discountPrice > 0,
      },
      {
        type: 'recommended',
        text: 'Recommended',
        display: recommended,
      },
      {
        type: 'bestSelling',
        text: 'Best selling',
        display: bestSelling,
      },
    ] || [];
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
      <TireTypeIcon type={typeName} />
      <TireImageWrapper>
        <TireImage src={`${apiUrl}${image_url}`} alt="Tire image" />
      </TireImageWrapper>

      <ShopCardFeaturesList data={{qualityClass, noise, consumption}} />

      <ShopCardTagList data={tagListData} />
      <PriceSection>
        {!!discountPrice && <Price>{discountPrice}$</Price>}
        <Price variant={discountPrice ? 'discount' : 'regular'}>{price}$</Price>
      </PriceSection>
    </Card>
  );
}
