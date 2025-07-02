import {useEffect, useState} from 'react';
import api from '../../api/axios';

export function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await api.get('/brands');
        isMounted && setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>DASHBOARD</h1>
      {data?.map((brand) => (
        <p key={brand.brand_id}>{brand.brand_name}</p>
      ))}
    </div>
  );
}
