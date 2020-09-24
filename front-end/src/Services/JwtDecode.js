import jwtDecode from 'jwt-decode';
import { getToken } from './auth';

const JwtDecode = () => {
  const token = jwtDecode(getToken('token'));
  return token;
}

export default JwtDecode;
