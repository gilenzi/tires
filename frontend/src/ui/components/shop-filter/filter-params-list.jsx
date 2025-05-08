import styled from 'styled-components';

const StyleFilterParamsList = styled.ul`
  list-style: none;
`;

export function FilterParamsList({data, dataName}) {
  if (!data || data.length === 0) return <p>No filters available.</p>;

  const items = data?.map((item) => {
    const name = item[`${dataName}_name`];
    const id = item[`${dataName}_id`];
    const labelId = `${dataName}-${id}`;
    return (
      <li key={id}>
        <input type="checkbox" value={name} id={labelId} />
        <label htmlFor={labelId}>{name}</label>
      </li>
    );
  });

  return <StyleFilterParamsList>{items}</StyleFilterParamsList>;
}
