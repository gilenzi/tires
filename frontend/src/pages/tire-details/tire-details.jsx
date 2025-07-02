import {useParams} from 'react-router';
import {
  TireDetailsContainer,
  TireImage,
  TopSection,
  TireImageWrapper,
  TireDetailsWrapper,
  BrandImage,
  BrandImageWrapper,
  TireHeading,
  TypeIconsWrapper,
  BottomSection,
} from './styled-components';
import {useTireDetails} from '../../hooks/tire-details';
import {Spinner} from '../../ui/components/spinner';
import {TireTypeIcon} from '../../ui/components/tire-type-icon';
import {ShopCardFeaturesList} from '../../ui/components/shop-card/shop-card-features-list';
import {AboutBrand} from '../../ui/components/about-brand';
import {DetailsTable} from '../../ui/components/details-table';
import {formatWarranty} from '../../utils/utils';
import {AddToCart} from '../../ui/components/add-to-cart';

const apiUrl = import.meta.env.VITE_API_URL;

export function TireDetails(props) {
  const {id} = useParams();
  const {data, isError, isLoading} = useTireDetails(id);

  if (isLoading) return <Spinner width={'55px'} height={'55px'} />;

  const {
    image_url,
    width: {width},
    height: {height},
    radius: {radius},
    type: {type_name: type},
    brand: {
      image_url: brand_url = '',
      brand_name: brandName = '',
      description: brandDescription = '',
    } = {},
    noise,
    consumption,
    quality_class: qualityClass,
    warranty,
  } = data;

  const warrantyLabel = formatWarranty(warranty);

  console.log(data);

  return (
    <TireDetailsContainer>
      <TopSection>
        <TireImageWrapper>
          <TireImage src={`${apiUrl}${image_url}`} />
        </TireImageWrapper>
        <TireDetailsWrapper>
          <BrandImageWrapper>
            <BrandImage src={`${apiUrl}${brand_url}`} />
          </BrandImageWrapper>
          <TireHeading>
            {brandName}
            <small>
              {width}/{height} R{radius}
            </small>
          </TireHeading>
          <TypeIconsWrapper>
            <TireTypeIcon type={type} />
            <TireTypeIcon type="car" />
          </TypeIconsWrapper>
          <ShopCardFeaturesList
            orientation="vertical"
            arrow="right"
            data={{qualityClass, noise, consumption, warranty: warrantyLabel}}
          />
          <AddToCart />
        </TireDetailsWrapper>
      </TopSection>
      <BottomSection>
        <AboutBrand brandName={brandName} brandDescription={brandDescription} />
        <DetailsTable tableData={data} />
      </BottomSection>
    </TireDetailsContainer>
  );
}
