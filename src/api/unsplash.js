import axios from 'axios';

//creates an instance of axios client with defualted properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d591cc556b57bd88ab216ce74c8a276756b263f32b78736cf6526e217da8bb28'
  }
});
