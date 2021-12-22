import { Link } from 'react-router-dom';
import Home from '../Home';
import { useUserState } from '../../context/UserProvider';

export default function PublicRoute() {
  const userState = useUserState();
  const { isAuthenticated } = userState;

  return (
    isAuthenticated ? <Home /> : <Link to='/'>Login</Link>
  )
}