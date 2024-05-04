import axios from 'axios';
import { errorHandler } from './errorHandler';

let products;

export async function fetchProductsInfo(page=1) {
const token = window.sessionStorage.getItem('token');
try {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/sneaker?page=${page}&limit=10`,
    headers: { Authorization: `Bearer ${token}`}
  });

  products = response.data;

  return products;
} catch (error) {
  errorHandler(error)
}
};