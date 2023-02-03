import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.params = { api_key: process.env.API_KEY, language: 'en-US' };
