import { routes, useAuthContext } from '@/shared';
import { Navigate, Outlet } from 'react-router-dom';

function AuthenticatedRoute() {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={routes.auth.signin.root} />;
  }
}

export { AuthenticatedRoute };
