import styled from 'styled-components';
import {formatWarranty} from '../../utils/utils';

const StyledDetailsTable = styled.table`
  border: 1px solid #dee2e6;
  border-collapse: collapse;

  & thead {
    & tr {
      background-color: #1764a7;
    }
    & th {
      text-align: left;
      color: #fff;
      width: 100%;
      color: #fff;
      font-weight: 900;
      font-size: 1rem;
      background-color: #1764a7;
      text-transform: uppercase;
      padding: 0.75rem;
    }
  }

  & tbody {
    & tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    & tr:last-child {
      border-bottom: 3px solid #1764a7;
    }
  }

  & td {
    padding: 0.75rem;
    vertical-align: top;
  }
`;

export function DetailsTable({tableData}) {
  const {
    width: {width},
    height: {height},
    radius: {radius},
    load_index: loadIndex,
    quality_class: qualityClass,
    speed_index: speedIndex,
    warranty,
  } = tableData;

  const formattedWarranty = formatWarranty(warranty, true);

  return (
    <StyledDetailsTable>
      <thead>
        <tr>
          <th>Specification</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Width</td>
          <td>{width}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{height}</td>
        </tr>
        <tr>
          <td>Radius</td>
          <td>{radius}</td>
        </tr>
        <tr>
          <td>Load Index</td>
          <td>{loadIndex}</td>
        </tr>
        <tr>
          <td>Speed Index</td>
          <td>{speedIndex}</td>
        </tr>
        <tr>
          <td>Quality Class</td>
          <td>{qualityClass}</td>
        </tr>
        <tr>
          <td>Warranty</td>
          <td>{formattedWarranty}</td>
        </tr>
      </tbody>
    </StyledDetailsTable>
  );
}
