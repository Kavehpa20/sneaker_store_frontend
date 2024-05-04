import axios from 'axios';
import { errorHandler } from './errorHandler';

let brands:string = '';
export async function fetchBrandsInfo() {
  if(!! brands) return brands;
const token = window.sessionStorage.getItem('token');
try {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/sneaker/brands`,
    headers: { Authorization: `Bearer ${token}`}
  });
  brands = response.data;
  return brands;
} catch (error) {
  errorHandler(error)
}
};