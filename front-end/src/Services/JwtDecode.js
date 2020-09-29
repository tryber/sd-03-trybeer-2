import jwtDecode from 'jwt-decode';
import { getToken } from './index';

const JwtDecode = () => {
  const token = jwtDecode(getToken('token'));
  return token;
};

export default JwtDecode;
