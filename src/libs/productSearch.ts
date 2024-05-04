import axios from 'axios';
import { errorHandler } from './errorHandler';

export let search: string|number;


export async function fetchSearchInfo(text: string|number) {
const token = window.sessionStorage.getItem('token');
try {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/sneaker?page=1&limit=10&search=${text}`,
    headers: { Authorization: `Bearer ${token}`}
  });
  search = response.data.data;
  return search;
} catch (error) {
  errorHandler(error)
}
};
