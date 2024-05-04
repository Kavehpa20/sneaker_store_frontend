import axios from 'axios';
import { errorHandler } from './errorHandler';

let filter;


export async function fetchFilterInfo(text="" , p=1) {
  // if(!! filter) return filter;
const token = window.sessionStorage.getItem('token');
try {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/sneaker?page=${p}&limit=10&brands=${text}`,
    headers: { Authorization: `Bearer ${token}`}
  });
  // console.log(response.data.data);
  // filter = { id: response.data.id , filtername: response.data.filtername};
  filter = response.data;
  return filter;
} catch (error) {
  errorHandler(error)
}
};
