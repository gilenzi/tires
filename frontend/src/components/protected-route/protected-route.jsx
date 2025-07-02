import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router';

export function ProtectedRoute({children, allowedRoles}) {
  const user = useSelector((state) => state.user);
  const {accessToken, role: userRole} = user;
  const location = useLocation();

  const isRoleAllowed = allowedRoles.some(
    (allowedRole) => allowedRole === userRole
  );

  const notAuthorized = accessToken && !isRoleAllowed;
  const canVisitPage = accessToken && isRoleAllowed;

  if (notAuthorized) {
    return (
      <Navigate
        to="/login"
        state={{from: location, message: 'Not authorized to open this page.'}}
        replace
      />
    );
  }

  if (!canVisitPage) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
}
