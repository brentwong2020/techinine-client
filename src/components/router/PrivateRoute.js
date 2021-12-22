import {
  Navigate,
  Link
} from 'react-router-dom';

import { useUserState } from '../../context/UserProvider';

export default function PrivateRoute({ component: RouteComponent }) {
  const userState = useUserState();
  const { isAuthenticated } = userState;

  return (
    isAuthenticated ? <RouteComponent /> : <Navigate to={'/'} />
  )
}