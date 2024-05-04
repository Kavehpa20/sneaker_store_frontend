import axios from 'axios';
import { errorHandler } from './errorHandler';

let details:any;


export async function fetchDetailsInfo(id=1) {
const token = window.sessionStorage.getItem('token');
try {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/sneaker/item/${id}`,
    headers: { Authorization: `Bearer ${token}`}
  });
  details = response.data;
  return details;
} catch (error) {
  errorHandler(error)
}
};
