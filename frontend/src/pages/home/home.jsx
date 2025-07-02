import {useSelector} from 'react-redux';
import {useRefreshToken} from '../../hooks/use-refresh-token';

export function Home(props) {
  const refresh = useRefreshToken();
  const username = useSelector((state) => state.user.name);
  const token = useSelector((state) => state.user.accessToken);
  return (
    <div>
      <h1>Home page Welcome {username}</h1>
      <p>{token}</p>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}
