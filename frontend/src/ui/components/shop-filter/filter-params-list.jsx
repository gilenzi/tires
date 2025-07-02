import {useSearchParams} from 'react-router';
import styled from 'styled-components';

const StyleFilterParamsList = styled.ul`
  list-style: none;
`;

export function FilterParamsList({data, dataName}) {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!data || data.length === 0) return <p>No filters available.</p>;

  const existingParams = searchParams.getAll(dataName);

  function isInputChecked(value) {
    return existingParams.includes(value);
  }

  function paramsHandler(event) {
    const {value, checked} = event.target;
    const newParams = new URLSearchParams(searchParams);
    const currentValues = newParams.getAll(dataName);

    if (checked) {
      newParams.append(dataName, value);
    } else {
      const updated = currentValues.filter((v) => v !== value);
      newParams.delete(dataName);
      updated.forEach((v) => newParams.append(dataName, v));
    }

    setSearchParams(newParams);
  }

  const items = data?.map((item) => {
    const name = item[`${dataName}_name`];
    const id = item[`${dataName}_id`];
    const labelId = `${dataName}-${id}`;
    return (
      <li key={id}>
        <input
          type="checkbox"
          value={name}
          checked={isInputChecked(name)}
          id={labelId}
          onChange={paramsHandler}
        />
        <label htmlFor={labelId}>{name}</label>
      </li>
    );
  });

  return <StyleFilterParamsList>{items}</StyleFilterParamsList>;
}
