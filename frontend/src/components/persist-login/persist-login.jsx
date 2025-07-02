import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Outlet} from 'react-router-dom';
import {useRefreshToken} from '../../hooks/use-refresh-token';
import {setUser} from '../../state/user/user-slice';
import {jwtDecode} from 'jwt-decode'; // make sure import is correct

export function PersistLogin({children}) {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const persist = true;

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        const newAccessToken = await refresh();
        if (newAccessToken) {
          const decodedUser = jwtDecode(newAccessToken);
          if (decodedUser.user) {
            dispatch(
              setUser({accessToken: newAccessToken, ...decodedUser.user})
            );
          }
        } else {
          // maybe clear user or redirect
        }
      } catch (err) {
        console.error('Failed to refresh:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    !user?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, [dispatch, persist, refresh, user?.accessToken]);

  // return <>{!persist ? children : isLoading ? <p>Loading...</p> : children}</>;
  return !persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />;
}
