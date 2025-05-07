import {useEffect} from 'react';
import {useLoaderData} from 'react-router';

export function TireDetails(props) {
  const loaderData = useLoaderData();

  console.log(loaderData);

  return <div>TIRE DETAILS</div>;
}
