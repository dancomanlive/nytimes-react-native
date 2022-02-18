import axios from 'axios';
// import { getGlobal } from 'reactn';
const token = '';
axios.interceptors.request.use(req => {
  req.headers = {
    Authorization: `USER ${token}`,
    'Content-Type': 'application/json',
    'X-App-Type': 'Mobile App',
    'x-app-version': 'v4.4.0-RC+6eea6f87',
    Accept: 'application/json',
  };
  return req;
});

axios.interceptors.response.use(res => {
  // console.log('res', res);
  // Important: response interceptors **must** return the response.
  return res;
});

export default axios;
